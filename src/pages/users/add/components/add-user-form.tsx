'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useLanguage } from '@/providers/i18n-provider';
import { Link, useNavigate } from 'react-router-dom';

export const AddUserForm = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'agent',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (val: string) => {
        setFormData({ ...formData, role: val });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would typically send the data to the server
        console.log('Submitting user data:', formData);
        // Navigate back to users list on success
        navigate('/users');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{t('البيانات الأساسية للمستخدم')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">{t('الاسم بالكامل')} <span className="text-destructive">*</span></Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder={t('أدخل اسم المستخدم')}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">{t('البريد الإلكتروني')} <span className="text-destructive">*</span></Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder={t('example@domain.com')}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">{t('كلمة المرور')} <span className="text-destructive">*</span></Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">{t('تأكيد كلمة المرور')} <span className="text-destructive">*</span></Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="********"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="pt-6 border-t">
                        <h3 className="text-lg font-medium mb-4">{t('تحديد الصلاحيات والأدوار')}</h3>
                        <RadioGroup
                            defaultValue={formData.role}
                            onValueChange={handleRoleChange}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            <div>
                                <RadioGroupItem value="admin" id="admin" className="peer sr-only" />
                                <Label
                                    htmlFor="admin"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <span className="block w-full text-center font-semibold mb-2">{t('مسؤول (Admin)')}</span>
                                    <span className="text-sm text-muted-foreground text-center">وصول كامل لجميع أجزاء النظام، بما في ذلك إعدادات المنصة وإدارة المستخدمين.</span>
                                </Label>
                            </div>

                            <div>
                                <RadioGroupItem value="agent" id="agent" className="peer sr-only" />
                                <Label
                                    htmlFor="agent"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <span className="block w-full text-center font-semibold mb-2">{t('وكيل عقاري (Agent)')}</span>
                                    <span className="text-sm text-muted-foreground text-center">إدارة العقارات الخاصة به، الرد على العملاء المحتملين والرسائل.</span>
                                </Label>
                            </div>

                            <div>
                                <RadioGroupItem value="sales" id="sales" className="peer sr-only" />
                                <Label
                                    htmlFor="sales"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <span className="block w-full text-center font-semibold mb-2">{t('موظف مبيعات (Sales)')}</span>
                                    <span className="text-sm text-muted-foreground text-center">عرض العقارات ومتابعة المبيعات دون صلاحيات التعديل أو الحذف للمباني.</span>
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-3 mt-4">
                    <Button variant="outline" type="button" asChild>
                        <Link to="/users">{t('إلغاء')}</Link>
                    </Button>
                    <Button variant="primary" type="submit">{t('حفظ المستخدم')}</Button>
                </CardFooter>
            </Card>
        </form>
    );
};
