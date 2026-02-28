'use client';

import { useMemo, useState } from 'react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import {
    ColumnDef,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    PaginationState,
    Row,
    RowSelectionState,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';
import { Settings2, EllipsisVertical, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardFooter,
    CardHeader,
    CardHeading,
    CardTable,
    CardToolbar,
} from '@/components/ui/card';
import { DataGrid, useDataGrid } from '@/components/ui/data-grid';
import { DataGridColumnHeader } from '@/components/ui/data-grid-column-header';
import { DataGridColumnVisibility } from '@/components/ui/data-grid-column-visibility';
import { DataGridPagination } from '@/components/ui/data-grid-pagination';
import {
    DataGridTable,
    DataGridTableRowSelect,
    DataGridTableRowSelectAll,
} from '@/components/ui/data-grid-table';
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface IRentProperty {
    id: string;
    name: string;
    price: string;
    location: string;
    status: string;
}

const data: IRentProperty[] = [
    { id: '1', name: 'شقة سكنية', price: '1500', location: 'بغداد', status: 'متاح' },
    { id: '2', name: 'فيلا للايجار', price: '5000', location: 'البصرة', status: 'مؤجر' },
];

function ActionsCell({ row }: { row: Row<IRentProperty> }) {
    console.log(row.original.id);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="size-7" mode="icon" variant="ghost">
                    <EllipsisVertical />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export const RentProperties = () => {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
    });
    const [sorting, setSorting] = useState<SortingState>([
        { id: 'name', desc: false },
    ]);
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = useMemo(() => {
        let filtered = data;
        if (searchQuery) {
            const searchLower = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (item) =>
                    item.name.toLowerCase().includes(searchLower) ||
                    item.location.toLowerCase().includes(searchLower)
            );
        }
        return filtered;
    }, [searchQuery]);

    const columns = useMemo<ColumnDef<IRentProperty>[]>(
        () => [
            {
                accessorKey: 'id',
                header: () => <DataGridTableRowSelectAll />,
                cell: ({ row }) => <DataGridTableRowSelect row={row} />,
                enableSorting: false,
                size: 50,
            },
            {
                id: 'name',
                accessorKey: 'name',
                header: ({ column }) => <DataGridColumnHeader title="Name" column={column} />,
                enableSorting: true,
                size: 200,
            },
            {
                id: 'price',
                accessorKey: 'price',
                header: ({ column }) => <DataGridColumnHeader title="Price" column={column} />,
                enableSorting: true,
                size: 150,
            },
            {
                id: 'location',
                accessorKey: 'location',
                header: ({ column }) => <DataGridColumnHeader title="Location" column={column} />,
                enableSorting: true,
                size: 200,
            },
            {
                id: 'status',
                accessorKey: 'status',
                header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
                enableSorting: true,
                size: 150,
            },
            {
                id: 'actions',
                header: '',
                cell: ({ row }) => <ActionsCell row={row} />,
                enableSorting: false,
                size: 60,
            },
        ],
        [],
    );

    const table = useReactTable({
        columns,
        data: filteredData,
        pageCount: Math.ceil((filteredData?.length || 0) / pagination.pageSize),
        getRowId: (row: IRentProperty) => String(row.id),
        state: {
            pagination,
            sorting,
            rowSelection,
        },
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const Toolbar = () => {
        const { table } = useDataGrid();

        return (
            <CardToolbar>
                <DataGridColumnVisibility
                    table={table}
                    trigger={
                        <Button variant="outline">
                            <Settings2 />
                            Columns
                        </Button>
                    }
                />
            </CardToolbar>
        );
    };

    return (
        <DataGrid table={table} recordCount={filteredData.length}>
            <Card>
                <CardHeader>
                    <CardHeading>
                        <div className="relative">
                            <Search
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                            />
                            <Input
                                placeholder="Search rent properties..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 w-64"
                            />
                        </div>
                    </CardHeading>
                    <Toolbar />
                </CardHeader>

                <CardTable>
                    <DataGridTable />
                </CardTable>

                <CardFooter>
                    <DataGridPagination />
                </CardFooter>
            </Card>
        </DataGrid>
    );
};
