<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [SubscribeUserAgentClient](./sip.js.subscribeuseragentclient.md)

## SubscribeUserAgentClient class

SUBSCRIBE UAC.

<b>Signature:</b>

```typescript
export declare class SubscribeUserAgentClient extends UserAgentClient implements OutgoingSubscribeRequest 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(core, message, delegate)](./sip.js.subscribeuseragentclient.(constructor).md) |  | Constructs a new instance of the <code>SubscribeUserAgentClient</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [delegate](./sip.js.subscribeuseragentclient.delegate.md) |  | <code>OutgoingSubscribeRequestDelegate &#124; undefined</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [dispose()](./sip.js.subscribeuseragentclient.dispose.md) |  | Destructor. Note that Timer N may live on waiting for an initial NOTIFY and the delegate may still receive that NOTIFY. If you don't want that behavior then either clear the delegate so the delegate doesn't get called (a 200 will be sent in response to the NOTIFY) or call <code>waitNotifyStop</code> which will clear Timer N and remove this UAC from the core (a 481 will be sent in response to the NOTIFY). |
|  [onNotify(uas)](./sip.js.subscribeuseragentclient.onnotify.md) |  | Handle out of dialog NOTIFY assoicated with SUBSCRIBE request. This is the first NOTIFY received after the SUBSCRIBE request. |
|  [receiveResponse(message)](./sip.js.subscribeuseragentclient.receiveresponse.md) |  | Receive a response from the transaction layer. |
|  [waitNotifyStart()](./sip.js.subscribeuseragentclient.waitnotifystart.md) |  |  |
|  [waitNotifyStop()](./sip.js.subscribeuseragentclient.waitnotifystop.md) |  |  |

## Remarks

4.1. Subscriber Behavior https://tools.ietf.org/html/rfc6665\#section-4.1

User agent client for installation of a single subscription per SUBSCRIBE request. TODO: Support for installation of multiple subscriptions on forked SUBSCRIBE reqeuests.

