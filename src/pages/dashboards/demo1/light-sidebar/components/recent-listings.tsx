import { DropdownMenu4 } from '@/partials/dropdown-menu/dropdown-menu-4';
import {
  Building2,
  Home,
  MapPin,
  ArrowDown,
  ArrowUp,
  EllipsisVertical,
  type LucideIcon,
} from 'lucide-react';
import { Badge, BadgeDot } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/providers/i18n-provider';

interface IRecentListingsRow {
  icon: LucideIcon;
  text: string;
  total: number;
  stats: number;
  increase: boolean;
}
type IRecentListingsRows = Array<IRecentListingsRow>;

interface IRecentListingsItem {
  badgeColor: string;
  label: string;
}
type IRecentListingsItems = Array<IRecentListingsItem>;

interface IRecentListingsProps {
  limit?: number;
}

const RecentListings = ({ limit }: IRecentListingsProps) => {
  const { t } = useLanguage();

  const rows: IRecentListingsRows = [
    {
      icon: Home,
      text: t('سكني'),
      total: 840,
      stats: 5.2,
      increase: true,
    },
    {
      icon: Building2,
      text: t('تجاري'),
      total: 215,
      stats: 1.2,
      increase: false,
    },
    {
      icon: MapPin,
      text: t('أراضي'),
      total: 95,
      stats: 4.8,
      increase: true,
    },
  ];

  const items: IRecentListingsItems = [
    { badgeColor: 'bg-green-500', label: t('منازل') },
    { badgeColor: 'bg-destructive', label: t('شقق') },
    { badgeColor: 'bg-violet-500', label: t('عقارات أخرى') },
  ];

  const renderRow = (row: IRecentListingsRow, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap gap-2"
      >
        <div className="flex items-center gap-1.5">
          <row.icon className="size-4.5 text-muted-foreground" />
          <span className="text-sm font-normal text-mono">{row.text}</span>
        </div>
        <div className="flex items-center text-sm font-medium text-foreground gap-6">
          <span className="lg:text-right">${row.total}k</span>
          <span className="flex items-center justify-end gap-1">
            {row.increase ? (
              <ArrowUp className="text-green-500 size-4" />
            ) : (
              <ArrowDown className="text-destructive size-4" />
            )}
            {row.stats}%
          </span>
        </div>
      </div>
    );
  };

  const renderItem = (item: IRecentListingsItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-1.5">
        <BadgeDot className={item.badgeColor} />
        <span className="text-sm font-normal text-foreground">
          {item.label}
        </span>
      </div>
    );
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{t('أحدث العقارات')}</CardTitle>
        <DropdownMenu4
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-5 lg:p-7.5 lg:pt-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-normal text-secondary-foreground">
            {t('إجمالي المتاح')}
          </span>
          <div className="flex items-center gap-2.5">
            <span className="text-3xl font-semibold text-mono">1,150</span>
            <Badge size="sm" variant="success" appearance="light">
              +5.4%
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-1.5">
          <div className="bg-green-500 h-2 w-full max-w-[60%] rounded-xs"></div>
          <div className="bg-destructive h-2 w-full max-w-[25%] rounded-xs"></div>
          <div className="bg-violet-500 h-2 w-full max-w-[15%] rounded-xs"></div>
        </div>
        <div className="flex items-center flex-wrap gap-4 mb-1">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
        <div className="border-b border-input"></div>
        <div className="grid gap-3">{rows.slice(0, limit).map(renderRow)}</div>
      </CardContent>
    </Card>
  );
};

export {
  RecentListings,
  type IRecentListingsRow,
  type IRecentListingsRows,
  type IRecentListingsItem,
  type IRecentListingsItems,
  type IRecentListingsProps,
};
