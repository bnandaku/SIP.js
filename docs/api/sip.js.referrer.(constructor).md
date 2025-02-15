<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [Referrer](./sip.js.referrer.md) &gt; [(constructor)](./sip.js.referrer.(constructor).md)

## Referrer.(constructor)

Constructs a new instance of the `Referrer` class.

<b>Signature:</b>

```typescript
constructor(session: Session, referTo: URI | Session, options?: ReferrerOptions);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  session | <code>Session</code> | The session the REFER will be sent from. See [Session](./sip.js.session.md) for details. |
|  referTo | <code>URI &#124; Session</code> | The referral target. If a <code>Session</code>, a REFER w/Replaces is sent. |
|  options | <code>ReferrerOptions</code> | An options bucket. See [ReferrerOptions](./sip.js.referreroptions.md) for details. |

