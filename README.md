# filmpermit

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Form email delivery

The permit application and contact forms submit to `/api/forms`. Each accepted
submission sends the details to the team and the appropriate automatic reply to
the visitor, using their submitted name in the greeting.

Set these server environment variables in `.env.local` and in your hosting settings:

```dotenv
SMTP_HOST=mail.filmpermit.ae
SMTP_PORT=465
SMTP_USER=info@filmpermit.ae
SMTP_PASSWORD=your-mailbox-password
FORM_EMAIL_FROM="Filmpermit.ae Team <info@filmpermit.ae>"
FORM_EMAIL_TO=info@filmpermit.ae
```

`FORM_EMAIL_TO` is optional and defaults to `info@filmpermit.ae`. Keep the mailbox
password server-side, in the ignored `.env.local` file and hosting environment
variables. Restart the server after changing environment variables. Without SMTP credentials,
forms display an availability error and contact details instead of claiming success.

Emails use authenticated [SMTP with Nodemailer](https://nodemailer.com/smtp),
with SSL/TLS on port 465. The team notification is sent first, followed by the
visitor's automatic reply. If the reply fails after the notification succeeds,
retrying the unchanged form on the same server process skips the accepted notification.
This retry tracking is held in memory for 24 hours; it does not survive restarts or
coordinate across multiple instances. SMTP cannot guarantee exactly-once delivery
if the connection drops after a message is accepted but before acknowledgement.
The endpoint also includes a basic in-memory limit of five attempts per ten minutes;
for multiple server instances, configure a shared rate limit or hosting protection.

Before launch, submit both forms with a real inbox and verify the team notifications
and visitor replies. The application success dialog appears after the email service
accepts both messages; acceptance does not guarantee inbox delivery.

## Local development

For cPanel deployment, use `app.js` as the Passenger application startup file.
Run `npm ci --include=dev` and `npm run build` in the activated Node.js environment,
then restart the application. The build script uses Webpack, limits Rayon and
libuv thread pools to one thread, and `next.config.ts` limits build workers to one.
Hosting process or memory limits may still require adjustment by the provider.
Production form requests allow the HTTPS origins `filmpermit.ae` and `www.filmpermit.ae`.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
