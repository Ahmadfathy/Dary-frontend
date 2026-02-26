'use client';

import { toAbsoluteUrl } from '@/lib/helpers';
import { useLanguage } from '@/providers/i18n-provider';

export function ScreenLoader() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-2 justify-center fixed inset-0 z-50 transition-opacity duration-700 ease-in-out">
      <img
        className="h-[30px] max-w-none"
        src={toAbsoluteUrl('/media/app/dary-mini.png')}
        alt="logo"
      />
      <div className="text-muted-foreground font-medium text-sm">
        {t('COMMON.LABELS.LOADING')}
      </div>
    </div>
  );
}
