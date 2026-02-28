import { Fragment } from 'react';
import { AvatarGroup } from '@/partials/common/avatar-group';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useLanguage } from '@/providers/i18n-provider';

interface IMarketOverviewProps {
  className: string;
}

const MarketOverview = ({ className }: IMarketOverviewProps) => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <style>
        {`
          .market-overview-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/3.png')}');
          }
          .dark .market-overview-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/3-dark.png')}');
          }
        `}
      </style>

      <Card className={`h-full ${className}`}>
        <CardContent className="p-10 bg-[length:80%] rtl:[background-position:-70%_25%] [background-position:175%_25%] bg-no-repeat market-overview-bg">
          <div className="flex flex-col justify-center gap-4">
            <AvatarGroup
              size="size-10"
              group={[
                { filename: '300-4.png' },
                { filename: '300-1.png' },
                { filename: '300-2.png' },
                {
                  fallback: 'S',
                  variant: 'text-white text-xs ring-background bg-green-500',
                },
              ]}
            />
            <h2 className="text-xl font-semibold text-mono">
              {t('Welcome back')}, <br />
              <Button mode="link" asChild className="text-xl font-semibold">
                <Link to="#">{t('Agent Smith')}</Link>
              </Button>
            </h2>
            <p className="text-sm font-normal text-secondary-foreground leading-5.5">
              {t('You have 3 new leads and')} <br />
              {t('2 upcoming property')} <br />
              {t('viewings today')}
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button mode="link" underlined="dashed" asChild>
            <Link to="#">{t('View Schedule')}</Link>
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export { MarketOverview, type IMarketOverviewProps };
