import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Home, Key, DollarSign } from 'lucide-react';
import { useLanguage } from '@/providers/i18n-provider';

interface IPropertyStatsItem {
  icon: any;
  info: string;
  desc: string;
  path: string;
}
type IPropertyStatsItems = Array<IPropertyStatsItem>;

const PropertyStats = () => {
  const { t } = useLanguage();

  const items: IPropertyStatsItems = [
    { icon: Building, info: '1,200', desc: t('إجمالي العقارات'), path: '' },
    { icon: Home, info: '340', desc: t('تم بيعها'), path: '' },
    {
      icon: Key,
      info: '850',
      desc: t('مؤجرة'),
      path: '',
    },
    {
      icon: DollarSign,
      info: '$12.5M',
      desc: t('إجمالي الإيرادات'),
      path: '',
    },
  ];

  const renderItem = (item: IPropertyStatsItem, index: number) => {
    return (
      <Card key={index}>
        <CardContent className="p-0 flex flex-col justify-between gap-6 h-full bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat property-stats-bg">
          <div className="w-10 h-10 mt-4 ms-5 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <item.icon className="size-5" />
          </div>
          <div className="flex flex-col gap-1 pb-4 px-5">
            <span className="text-3xl font-semibold text-mono">
              {item.info}
            </span>
            <span className="text-sm font-normal text-muted-forehead">
              {item.desc}
            </span>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Fragment>
      <style>
        {`
          .property-stats-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/bg-3.png')}');
          }
          .dark .property-stats-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/bg-3-dark.png')}');
          }
        `}
      </style>

      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Fragment>
  );
};

export { PropertyStats, type IPropertyStatsItem, type IPropertyStatsItems };
