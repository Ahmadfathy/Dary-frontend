import { Fragment } from 'react';
import {
    Toolbar,
    ToolbarHeading,
    ToolbarPageTitle,
} from '@/partials/common/toolbar';
import { useSettings } from '@/providers/settings-provider';
import { Container } from '@/components/common/container';
import { AddUserContent } from './add-user-content';

export function AddUserPage() {
    const { settings } = useSettings();

    return (
        <Fragment>
            {settings?.layout === 'demo1' && (
                <Container>
                    <Toolbar>
                        <ToolbarHeading>
                            <ToolbarPageTitle text="إضافة مستخدم" />
                        </ToolbarHeading>
                    </Toolbar>
                </Container>
            )}

            <Container>
                <AddUserContent />
            </Container>
        </Fragment>
    );
}
