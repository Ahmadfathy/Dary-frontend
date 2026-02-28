'use client';

import { useMemo, useState } from 'react';
import { Avatar, AvatarGroup } from '@/partials/common/avatar-group';
import { Rating } from '@/partials/common/rating';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  RowSelectionState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTable,
  CardTitle,
  CardToolbar,
} from '@/components/ui/card';
import { DataGrid } from '@/components/ui/data-grid';
import { DataGridColumnHeader } from '@/components/ui/data-grid-column-header';
import { DataGridPagination } from '@/components/ui/data-grid-pagination';
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from '@/components/ui/data-grid-table';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/providers/i18n-provider';

interface IData {
  id: number;
  name: string;
  role: string;
  rating: number;
  properties_sold: number;
  updated_at: string;
  users: Avatar[];
}

const data: IData[] = [
  {
    id: 1,
    name: 'كريستيان ميتشل',
    role: 'وكيل أول',
    rating: 5,
    properties_sold: 45,
    updated_at: '21 تشرين الأول, 2024',
    users: [{ path: '/media/avatars/300-4.png', fallback: 'CM' }],
  },
  {
    id: 2,
    name: 'جريس مولر',
    role: 'وكيل تجاري',
    rating: 4.5,
    properties_sold: 28,
    updated_at: '15 تشرين الأول, 2024',
    users: [{ path: '/media/avatars/300-1.png', fallback: 'GM' }],
  },
  {
    id: 3,
    name: 'إفرايم وايلدرمان',
    role: 'أخصائي فخامة',
    rating: 5,
    properties_sold: 12,
    updated_at: '10 تشرين الأول, 2024',
    users: [{ path: '/media/avatars/300-2.png', fallback: 'EW' }],
  },
  {
    id: 4,
    name: 'كولين باليستريري',
    role: 'وكيل إدراج',
    rating: 4,
    properties_sold: 35,
    updated_at: '05 تشرين الأول, 2024',
    users: [{ path: '/media/avatars/300-4.png', fallback: 'CB' }],
  },
];

const ActiveAgents = () => {
  const { t } = useLanguage();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'updated_at', desc: true },
  ]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        accessorKey: 'id',
        accessorFn: (row) => row.id,
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        enableSorting: false,
        enableHiding: false,
        enableResizing: false,
        size: 48,
        meta: {
          cellClassName: '',
        },
      },
      {
        id: 'users',
        accessorFn: (row) => row.users,
        header: ({ column }) => (
          <DataGridColumnHeader title={t('الصورة')} column={column} />
        ),
        cell: ({ row }) => (
          <AvatarGroup group={row.original.users} size="size-8" />
        ),
        enableSorting: true,
        size: 100,
        meta: {
          skeleton: <Skeleton className="h-6 w-[32px]" />,
        },
      },
      {
        id: 'name',
        accessorFn: (row) => row.name,
        header: ({ column }) => (
          <DataGridColumnHeader title={t('الوكيل')} column={column} />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-2">
            <span className="leading-none font-medium text-sm text-mono hover:text-primary">
              {row.original.name}
            </span>
            <span className="text-sm text-secondary-foreground font-normal leading-3">
              {t(row.original.role)}
            </span>
          </div>
        ),
        enableSorting: true,
        size: 200,
        meta: {
          skeleton: (
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-[125px]" />
              <Skeleton className="h-2.5 w-[90px]" />
            </div>
          ),
        },
      },
      {
        id: 'rating',
        accessorFn: (row) => row.rating,
        header: ({ column }) => (
          <DataGridColumnHeader title={t('التقييم')} column={column} />
        ),
        cell: ({ row }) => (
          <Rating
            rating={Math.floor(row.original.rating)}
            round={row.original.rating % 1}
          />
        ),
        enableSorting: true,
        size: 135,
        meta: {
          skeleton: <Skeleton className="h-5 w-[60px]" />,
        },
      },
      {
        id: 'properties_sold',
        accessorFn: (row) => row.properties_sold,
        header: ({ column }) => (
          <DataGridColumnHeader title={t('العقارات المباعة')} column={column} />
        ),
        cell: ({ row }) => row.original.properties_sold,
        enableSorting: true,
        size: 135,
        meta: {
          skeleton: <Skeleton className="h-5 w-[70px]" />,
        },
      },
      {
        id: 'updated_at',
        accessorFn: (row) => row.updated_at,
        header: ({ column }) => (
          <DataGridColumnHeader title={t('آخر نشاط')} column={column} />
        ),
        cell: ({ row }) => row.original.updated_at,
        enableSorting: true,
        size: 135,
        meta: {
          skeleton: <Skeleton className="h-5 w-[70px]" />,
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    columns,
    data: filteredData,
    pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
    getRowId: (row: IData) => String(row.id),
    state: {
      pagination,
      sorting,
      rowSelection,
    },
    columnResizeMode: 'onChange',
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <DataGrid
      table={table}
      recordCount={filteredData?.length || 0}
      tableLayout={{
        columnsPinnable: true,
        columnsMovable: true,
        columnsVisibility: true,
        cellBorder: true,
      }}
    >
      <Card>
        <CardHeader className="py-3.5">
          <CardTitle>{t('الوكلاء النشطين')}</CardTitle>
          <CardToolbar className="relative">
            <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
            <Input
              placeholder={t('البحث عن وكلاء...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ps-9 w-40"
            />
            {searchQuery.length > 0 && (
              <Button
                mode="icon"
                variant="ghost"
                className="absolute end-1.5 top-1/2 -translate-y-1/2 h-6 w-6"
                onClick={() => setSearchQuery('')}
              >
                <X />
              </Button>
            )}
          </CardToolbar>
        </CardHeader>
        <CardTable>
          <ScrollArea>
            <DataGridTable />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardTable>
        <CardFooter>
          <DataGridPagination />
        </CardFooter>
      </Card>
    </DataGrid>
  );
};

export { ActiveAgents };
