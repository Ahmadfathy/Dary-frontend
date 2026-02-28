import { AvatarGroup } from '@/partials/common/avatar-group';
import { MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useLanguage } from '@/providers/i18n-provider';

const UpcomingViewings = () => {
  const { t } = useLanguage();

  return (
    <Card className="h-full">
      <CardContent className="grow lg:p-7.5 lg:pt-6 p-5">
        <div className="flex items-center justify-between flex-wrap gap-5 mb-7.5">
          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold text-mono">
              {t('معاينات العقارات')}
            </span>
            <span className="text-sm font-semibold text-foreground">
              14:00 - 15:30
            </span>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <MapPin className="size-5" />
          </div>
        </div>
        <p className="text-sm font-normal text-foreground leading-5.5 mb-8">
          {t('إظهار الوحدات السكنية الفاخرة على الواجهة المائية')} <br />
          {t('لعائلة سميث.')} <br />
          {t('تأكد من إبراز ميزات المنزل الذكي.')}
        </p>
        <div className="flex rounded-lg bg-accent/50 gap-10 p-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1.5 text-sm font-normal text-foreground">
              <MapPin size={16} className="text-base text-muted-foreground" />
              {t('الموقع')}
            </div>
            <div className="text-sm font-medium text-foreground pt-1.5">
              123 شارع المحيط
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1.5 text-sm font-normal text-foreground">
              <Users size={16} className="text-base text-muted-foreground" />
              {t('العملاء')}
            </div>
            <AvatarGroup
              size="size-[30px]"
              group={[
                { filename: '300-1.png' },
                { filename: '300-2.png' },
              ]}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="#">{t('عرض التفاصيل')}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { UpcomingViewings };
