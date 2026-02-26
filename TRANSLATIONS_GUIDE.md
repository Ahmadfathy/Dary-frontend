# Translation Guide (AR & EN)

This document provides a comprehensive guide on how to implement Arabic (AR) and English (EN) translations in the Dary Frontend application using i18n.

## Overview

The project uses **react-intl** with a custom i18n provider setup for managing translations. The system supports:
- **English (EN)** - Left-to-Right (LTR)
- **Arabic (AR)** - Right-to-Left (RTL)

## File Structure

Translation files are organized as follows:

```
src/
├── i18n/
│   ├── config.ts              # i18n configuration
│   ├── types.ts               # TypeScript types
│   └── messages/
│       ├── en.json            # English translations
│       ├── ar.json            # Arabic translations
│       ├── fr.json            # French translations (optional)
│       └── zh.json            # Chinese translations (optional)
├── providers/
│   └── i18n-provider.tsx      # i18n context provider
```

## Translation Structure

All translations are organized using a dot-notation naming convention. This makes it easy to:
- Group related translations
- Find specific keys
- Maintain consistency

### Example Keys:
```
USER.MENU.LOGIN
AUTH.LOGIN.EMAIL
ACCOUNT.PROFILE.FIRST_NAME
COMMON.BUTTONS.SAVE
```

## Available Translation Keys

### User Menu
- `USER.MENU.PUBLIC_PROFILE` - Public Profile
- `USER.MENU.MY_PROFILE` - My Profile
- `USER.MENU.MY_ACCOUNT` - My Account
- `USER.MENU.GET_STARTED` - Get Started
- `USER.MENU.BILLING` - Billing
- `USER.MENU.SECURITY` - Security
- `USER.MENU.MEMBERS_&_ROLES` - Members & Roles
- `USER.MENU.INTEGRATIONS` - Integrations
- `USER.MENU.NOTIFICATIONS` - Notifications
- `USER.MENU.DEV_FORUM` - Dev Forum
- `USER.MENU.PAYMENT_&_SUBSCRIPTION_INFO` - Payment & subscription info
- `USER.MENU.DARK_MODE` - Dark Mode
- `USER.MENU.LOGOUT` - Logout
- `USER.MENU.LANGUAGE` - Language

### Common Buttons
- `COMMON.BUTTONS.SUBMIT` - Submit
- `COMMON.BUTTONS.CANCEL` - Cancel
- `COMMON.BUTTONS.SAVE` - Save
- `COMMON.BUTTONS.DELETE` - Delete
- `COMMON.BUTTONS.EDIT` - Edit
- `COMMON.BUTTONS.ADD` - Add
- `COMMON.BUTTONS.CLOSE` - Close
- `COMMON.BUTTONS.NEXT` - Next
- `COMMON.BUTTONS.BACK` - Back
- `COMMON.BUTTONS.SEARCH` - Search
- `COMMON.BUTTONS.FILTER` - Filter
- `COMMON.BUTTONS.RESET` - Reset
- `COMMON.BUTTONS.DOWNLOAD` - Download
- `COMMON.BUTTONS.UPLOAD` - Upload
- `COMMON.BUTTONS.EXPORT` - Export
- `COMMON.BUTTONS.IMPORT` - Import
- `COMMON.BUTTONS.APPROVE` - Approve
- `COMMON.BUTTONS.REJECT` - Reject
- `COMMON.BUTTONS.VIEW` - View
- `COMMON.BUTTONS.DETAILS` - Details

### Common Labels
- `COMMON.LABELS.YES` - Yes
- `COMMON.LABELS.NO` - No
- `COMMON.LABELS.OK` - OK
- `COMMON.LABELS.REQUIRED` - Required
- `COMMON.LABELS.OPTIONAL` - Optional
- `COMMON.LABELS.LOADING` - Loading...
- `COMMON.LABELS.SAVING` - Saving...
- `COMMON.LABELS.DELETING` - Deleting...
- `COMMON.LABELS.NONE` - None
- `COMMON.LABELS.ALL` - All
- `COMMON.LABELS.MORE` - More
- `COMMON.LABELS.LESS` - Less
- `COMMON.LABELS.SHOW` - Show
- `COMMON.LABELS.HIDE` - Hide
- `COMMON.LABELS.SORT` - Sort
- `COMMON.LABELS.ASCENDING` - Ascending
- `COMMON.LABELS.DESCENDING` - Descending

### Navigation Menu

### Common Labels
- `COMMON.LABELS.OR` - or
- `NAVIGATION.MENU.DASHBOARD` - Dashboard
- `NAVIGATION.MENU.PROFILE` - Profile
- `NAVIGATION.MENU.ACCOUNT` - Account
- `NAVIGATION.MENU.SETTINGS` - Settings
- `NAVIGATION.MENU.NETWORK` - Network
- `NAVIGATION.MENU.STORE` - Store
- `NAVIGATION.MENU.PRODUCTS` - Products
- `NAVIGATION.MENU.ORDERS` - Orders
- `NAVIGATION.MENU.CUSTOMERS` - Customers
- `NAVIGATION.MENU.ANALYTICS` - Analytics
- `NAVIGATION.MENU.REPORTS` - Reports
- `NAVIGATION.MENU.HELP` - Help

### Authentication
- `AUTH.LOGIN.TITLE` - Sign In
- `AUTH.LOGIN.EMAIL` - Email
- `AUTH.LOGIN.PASSWORD` - Password
- `AUTH.LOGIN.REMEMBER_ME` - Remember me
- `AUTH.LOGIN.FORGOT_PASSWORD` - Forgot password?
- `AUTH.LOGIN.SIGN_IN` - Sign In
- `AUTH.LOGIN.NO_ACCOUNT` - Don't have an account?
- `AUTH.LOGIN.SIGN_UP_LINK` - Sign up
- `AUTH.LOGIN.WELCOME` - Welcome back! Log in with your credentials.
- `AUTH.LOGIN.GOOGLE_SIGNIN` - Sign in with Google
- `AUTH.LOGIN.GOOGLE_SIGNING_IN` - Signing in with Google...
- `AUTH.LOGIN.PASSWORD_RESET_SUCCESS` - Password reset success message
- `AUTH.SIGNUP.TITLE` - Sign Up
- `AUTH.SIGNUP.FIRST_NAME` - First Name
- `AUTH.SIGNUP.LAST_NAME` - Last Name
- `AUTH.SIGNUP.EMAIL` - Email
- `AUTH.SIGNUP.PASSWORD` - Password
- `AUTH.SIGNUP.CONFIRM_PASSWORD` - Confirm Password
- `AUTH.SIGNUP.AGREE_TERMS` - I agree to the Terms & Conditions
- `AUTH.SIGNUP.SIGN_UP` - Sign Up
- `AUTH.SIGNUP.ALREADY_ACCOUNT` - Already have an account?
- `AUTH.SIGNUP.SIGN_IN_LINK` - Sign in

### Password Management
- `AUTH.PASSWORD.RESET_TITLE` - Reset Password
- `AUTH.PASSWORD.RESET_DESCRIPTION` - Enter your email to receive a password reset link
- `AUTH.PASSWORD.SEND_LINK` - Send Reset Link
- `AUTH.PASSWORD.SENDING_LINK` - Sending Link...
- `AUTH.PASSWORD.BACK_TO_SIGN_IN` - Back to Sign In
- `AUTH.PASSWORD.NEW_PASSWORD` - New Password
- `AUTH.PASSWORD.CHANGE_PASSWORD` - Change Password

### Account Profile
- `ACCOUNT.PROFILE.EDIT_PROFILE` - Edit Profile
- `ACCOUNT.PROFILE.FIRST_NAME` - First Name
- `ACCOUNT.PROFILE.LAST_NAME` - Last Name
- `ACCOUNT.PROFILE.EMAIL` - Email
- `ACCOUNT.PROFILE.PHONE` - Phone
- `ACCOUNT.PROFILE.AVATAR` - Avatar
- `ACCOUNT.PROFILE.BIOGRAPHY` - Biography
- `ACCOUNT.PROFILE.LOCATION` - Location
- `ACCOUNT.PROFILE.WEBSITE` - Website
- `ACCOUNT.PROFILE.TIMEZONE` - Timezone

### Billing
- `ACCOUNT.BILLING.BILLING_INFO` - Billing Information
- `ACCOUNT.BILLING.PAYMENT_METHOD` - Payment Method
- `ACCOUNT.BILLING.BILLING_ADDRESS` - Billing Address
- `ACCOUNT.BILLING.SUBSCRIPTION` - Subscription
- `ACCOUNT.BILLING.PLAN` - Plan
- `ACCOUNT.BILLING.PRICE` - Price
- `ACCOUNT.BILLING.RENEWAL_DATE` - Renewal Date
- `ACCOUNT.BILLING.CANCEL_SUBSCRIPTION` - Cancel Subscription
- `ACCOUNT.BILLING.UPGRADE_PLAN` - Upgrade Plan

### Security
- `ACCOUNT.SECURITY.CHANGE_PASSWORD` - Change Password
- `ACCOUNT.SECURITY.CURRENT_PASSWORD` - Current Password
- `ACCOUNT.SECURITY.NEW_PASSWORD` - New Password
- `ACCOUNT.SECURITY.CONFIRM_PASSWORD` - Confirm Password
- `ACCOUNT.SECURITY.TWO_FACTOR` - Two-Factor Authentication
- `ACCOUNT.SECURITY.SESSIONS` - Active Sessions
- `ACCOUNT.SECURITY.LOGIN_HISTORY` - Login History

### Members & Roles
- `ACCOUNT.MEMBERS.MEMBERS` - Members
- `ACCOUNT.MEMBERS.ADD_MEMBER` - Add Member
- `ACCOUNT.MEMBERS.INVITE` - Invite
- `ACCOUNT.MEMBERS.REMOVE` - Remove
- `ACCOUNT.MEMBERS.ROLE` - Role
- `ACCOUNT.MEMBERS.PERMISSIONS` - Permissions
- `ACCOUNT.MEMBERS.JOINED_DATE` - Joined Date
- `ACCOUNT.MEMBERS.STATUS` - Status

### Notifications
- `ACCOUNT.NOTIFICATIONS.NOTIFICATION_SETTINGS` - Notification Settings
- `ACCOUNT.NOTIFICATIONS.EMAIL_NOTIFICATIONS` - Email Notifications
- `ACCOUNT.NOTIFICATIONS.PUSH_NOTIFICATIONS` - Push Notifications
- `ACCOUNT.NOTIFICATIONS.IN_APP_NOTIFICATIONS` - In-App Notifications
- `ACCOUNT.NOTIFICATIONS.NOTIFICATION_TYPE` - Notification Type
- `ACCOUNT.NOTIFICATIONS.FREQUENCY` - Frequency
- `ACCOUNT.NOTIFICATIONS.ENABLED` - Enabled
- `ACCOUNT.NOTIFICATIONS.DISABLED` - Disabled

### Form Validation
- `FORMS.VALIDATION.REQUIRED_FIELD` - This field is required
- `FORMS.VALIDATION.INVALID_EMAIL` - Please enter a valid email address
- `FORMS.VALIDATION.PASSWORD_TOO_SHORT` - Password must be at least 8 characters
- `FORMS.VALIDATION.PASSWORDS_NOT_MATCH` - Passwords do not match
- `FORMS.VALIDATION.INVALID_PHONE` - Please enter a valid phone number
- `FORMS.VALIDATION.INVALID_URL` - Please enter a valid URL

### Status Messages
- `STATUS.SUCCESS` - Success
- `STATUS.ERROR` - Error
- `STATUS.WARNING` - Warning
- `STATUS.INFO` - Information
- `STATUS.ACTIVE` - Active
- `STATUS.INACTIVE` - Inactive
- `STATUS.PENDING` - Pending
- `STATUS.COMPLETED` - Completed
- `STATUS.FAILED` - Failed
- `STATUS.CANCELLED` - Cancelled

### General Messages
- `MESSAGES.SUCCESS` - Operation completed successfully
- `MESSAGES.ERROR` - An error occurred. Please try again.
- `MESSAGES.CONFIRM_DELETE` - Are you sure you want to delete this item?
- `MESSAGES.UNSAVED_CHANGES` - You have unsaved changes
- `MESSAGES.LOADING` - Please wait while we load the content...
- `MESSAGES.NO_DATA` - No data available
- `MESSAGES.NO_RESULTS` - No results found
- `MESSAGES.OFFLINE` - You are currently offline
- `MESSAGES.SESSION_EXPIRED` - Your session has expired. Please log in again.
- `MESSAGES.UNAUTHORIZED` - You do not have permission to access this resource

### Tables
- `TABLE.COLUMNS.NAME` - Name
- `TABLE.COLUMNS.EMAIL` - Email
- `TABLE.COLUMNS.STATUS` - Status
- `TABLE.COLUMNS.DATE` - Date
- `TABLE.COLUMNS.ACTIONS` - Actions
- `TABLE.PAGINATION.ROWS_PER_PAGE` - Rows per page
- `TABLE.PAGINATION.OF` - of
- `TABLE.PAGINATION.SHOWING` - Showing

### Store - Orders
- `STORE.ORDERS.ORDERS` - Orders
- `STORE.ORDERS.ORDER_ID` - Order ID
- `STORE.ORDERS.CUSTOMER` - Customer
- `STORE.ORDERS.TOTAL` - Total
- `STORE.ORDERS.STATUS` - Status
- `STORE.ORDERS.DATE` - Date
- `STORE.ORDERS.CREATE_ORDER` - Create Order

### Store - Products
- `STORE.PRODUCTS.PRODUCTS` - Products
- `STORE.PRODUCTS.PRODUCT_NAME` - Product Name
- `STORE.PRODUCTS.SKU` - SKU
- `STORE.PRODUCTS.PRICE` - Price
- `STORE.PRODUCTS.QUANTITY` - Quantity
- `STORE.PRODUCTS.CATEGORY` - Category
- `STORE.PRODUCTS.ADD_PRODUCT` - Add Product
- `STORE.PRODUCTS.EDIT_PRODUCT` - Edit Product

### Store - Shipping
- `STORE.SHIPPING.SHIPPING` - Shipping
- `STORE.SHIPPING.SHIPPING_ADDRESS` - Shipping Address
- `STORE.SHIPPING.SHIPPING_METHOD` - Shipping Method
- `STORE.SHIPPING.TRACKING_NUMBER` - Tracking Number
- `STORE.SHIPPING.ESTIMATED_DELIVERY` - Estimated Delivery

### Time/Dates
- `TIME.TODAY` - Today
- `TIME.YESTERDAY` - Yesterday
- `TIME.THIS_WEEK` - This Week
- `TIME.LAST_WEEK` - Last Week
- `TIME.THIS_MONTH` - This Month
- `TIME.LAST_MONTH` - Last Month
- `TIME.JANUARY` - January through `TIME.DECEMBER` - December

## How to Use Translations in Components

### Method 1: Using react-intl (Recommended)

```tsx
import { useIntl } from 'react-intl';

export function MyComponent() {
  const intl = useIntl();
  
  return (
    <button>
      {intl.formatMessage({ id: 'COMMON.BUTTONS.SAVE' })}
    </button>
  );
}
```

### Method 2: Using FormattedMessage Component

```tsx
import { FormattedMessage } from 'react-intl';

export function MyComponent() {
  return (
    <button>
      <FormattedMessage id="COMMON.BUTTONS.SAVE" />
    </button>
  );
}
```

### Method 3: Direct Access from Language Context (Current Implementation)

```tsx
import { useLanguage } from '@/providers/i18n-provider';

export function MyComponent() {
  const { currenLanguage } = useLanguage();
  
  return (
    <button>
      {currenLanguage.messages['COMMON.BUTTONS.SAVE'] as string}
    </button>
  );
}
```

## Changing Language

```tsx
import { useLanguage } from '@/providers/i18n-provider';
import { I18N_LANGUAGES } from '@/i18n/config';

export function LanguageSwitcher() {
  const { changeLanguage } = useLanguage();
  
  const handleLanguageChange = (languageCode: string) => {
    const selectedLanguage = I18N_LANGUAGES.find(
      lang => lang.code === languageCode
    );
    if (selectedLanguage) {
      changeLanguage(selectedLanguage);
    }
  };
  
  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('ar')}>العربية</button>
    </div>
  );
}
```

## RTL Support

The i18n provider automatically handles RTL (Right-to-Left) layout for Arabic:

```tsx
import { useLanguage } from '@/providers/i18n-provider';

export function MyComponent() {
  const { isRTL } = useLanguage();
  
  return (
    <div className={isRTL() ? 'text-right' : 'text-left'}>
      Content here
    </div>
  );
}
```

## Adding New Translations

### Step 1: Add Key to English File (`src/i18n/messages/en.json`)
```json
{
  "FEATURE.NEW_KEY": "Your English text here"
}
```

### Step 2: Add Key to Arabic File (`src/i18n/messages/ar.json`)
```json
{
  "FEATURE.NEW_KEY": "نصك بالعربية هنا"
}
```

### Step 3: Use in Component
```tsx
import { useIntl } from 'react-intl';
// or
import { useLanguage } from '@/providers/i18n-provider';
```

## Best Practices

1. **Use Consistent Naming**: Follow the dot-notation convention (e.g., `SECTION.SUBSECTION.KEY`)
2. **Group Related Translations**: Keep related keys under the same namespace
3. **Use Descriptive Keys**: Make keys self-explanatory (avoid shortened or cryptic names)
4. **Keep Translations Updated**: When adding new keys, update both English and Arabic files
5. **Avoid Hardcoded Text**: Always use translation keys instead of hardcoding text
6. **Test RTL**: Always test Arabic UI to ensure proper RTL layout
7. **Use Proper Arabic**: Ensure Arabic translations are grammatically correct and culturally appropriate

## Configuration

### Current Supported Languages
- English (en) - LTR
- Arabic (ar) - RTL
- French (fr) - LTR (optional)
- Chinese (zh) - LTR (optional)

### Change Default Language

To change the default language, edit `src/i18n/config.ts`:

```tsx
const I18N_DEFAULT_LANGUAGE: Language = I18N_LANGUAGES[0]; // Arabic (index 0)
// or
const I18N_DEFAULT_LANGUAGE: Language = I18N_LANGUAGES[1]; // English (index 1)
```

### Lazy Loading Language

You can pass language via URL query parameter:
```
https://your-app.com?lang=ar
https://your-app.com?lang=en
```

## Troubleshooting

### Missing Translation Keys
If a translation key is missing:
1. Check if the key exists in both `en.json` and `ar.json`
2. Verify the key name is spelled correctly
3. Check the JSON syntax for errors

### RTL Not Applied
- Ensure the language's `direction` property in `config.ts` is set to `'rtl'`
- Check that `document.documentElement.setAttribute('dir', ...)` is being called
- Clear browser cache and refresh

### Translations Not Updating
- The provider stores language preference in `localStorage`
- Clear localStorage and refresh if language doesn't update
- Ensure the `I18nProvider` wraps your entire app

## Resources

- [react-intl Documentation](https://formatjs.io/docs/react-intl)
- [i18n Best Practices](https://www.w3.org/International/questions/qa-i18n)
