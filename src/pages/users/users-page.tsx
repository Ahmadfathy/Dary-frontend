import { Fragment } from 'react';
import {
    Toolbar,
    ToolbarActions,
    ToolbarDescription,
    ToolbarHeading,
    ToolbarPageTitle,
} from '@/partials/common/toolbar';
import { useSettings } from '@/providers/settings-provider';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import { UsersContent } from './users-content';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function UsersPage() {
    const { settings } = useSettings();

    return (
        <Fragment>
            {settings?.layout === 'demo1' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle text="كل المستخدمين" />
                            <ToolbarDescription>قائمة بجميع المستخدمين وصلاحياتهم</ToolbarDescription>
                        </ToolbarHeading>
                        <ToolbarActions>
                            <Button variant="primary" asChild>
                                <Link to="/users/add">
                                    <Plus className="mr-2" size={16} />
                                    إضافة مستخدم
                                </Link>
                            </Button>
                        </ToolbarActions>
                    </Toolbar>
                </Container>
            )}

            <Container>
                <UsersContent />
            </Container>
        </Fragment>
    );
}
