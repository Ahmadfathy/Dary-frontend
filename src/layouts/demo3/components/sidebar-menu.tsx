import {
  BarChart3,
  Bell,
  CheckSquare,
  Code,
  HelpCircle,
  MessageSquare,
  Settings,
  Shield,
  UserCircle,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/providers/i18n-provider';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export interface Item {
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  title: string;
  newTab?: boolean;
  active?: boolean;
}

export function SidebarMenu() {
  const { currenLanguage } = useLanguage();
  
  // Translation helper
  const t = (key: string) => (currenLanguage.messages[key] as string) || key;

  const items: Item[] = [
    {
      icon: BarChart3,
      path: '/',
      title: t('NAVIGATION.MENU.DASHBOARD'),
    },
    {
      icon: UserCircle,
      path: '/public-profile/profiles/default',
      title: t('NAVIGATION.MENU.PROFILE'),
    },
    {
      icon: Settings,
      path: '/account/home/get-started',
      title: t('NAVIGATION.MENU.ACCOUNT'),
    },
    {
      icon: Users,
      path: '/network/get-started',
      title: t('NAVIGATION.MENU.NETWORK'),
      active: true,
    },
    {
      icon: Shield,
      path: '/account/billing/plans',
      title: t('ACCOUNT.BILLING.PLAN'),
    },
    {
      icon: MessageSquare,
      path: '/account/security/security-log',
      title: t('ACCOUNT.SECURITY.SESSIONS'),
    },
    {
      icon: Bell,
      path: '/account/notifications',
      title: t('ACCOUNT.NOTIFICATIONS.NOTIFICATION_SETTINGS'),
    },
    {
      icon: CheckSquare,
      path: '/account/members/roles',
      title: t('ACCOUNT.MEMBERS.ROLE'),
    },
    {
      icon: Code,
      path: '/account/api-keys',
      title: t('ACCOUNT.MEMBERS.API_KEYS'),
    },
    {
      icon: HelpCircle,
      path: 'https://docs.keenthemes.com/metronic-vite',
      title: t('NAVIGATION.MENU.HELP'),
    },
  ];

  return (
    <TooltipProvider>
      <div className="flex flex-col grow items-center py-3.5 lg:py-0 gap-2.5">
        {items.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                shape="circle"
                mode="icon"
                {...(item.active ? { 'data-state': 'open' } : {})}
                className={cn(
                  'data-[state=open]:bg-background data-[state=open]:border data-[state=open]:border-input data-[state=open]:text-primary',
                  'hover:bg-background hover:border hover:border-input hover:text-primary',
                )}
              >
                <Link
                  to={item.path || ''}
                  {...(item.newTab
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <item.icon className="size-4.5!" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{item.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
