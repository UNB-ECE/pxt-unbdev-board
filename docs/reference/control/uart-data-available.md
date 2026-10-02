# Click UART data available

Check whether the controller reports bytes waiting on a Click socket UART.

```sig
UNBdevClick.uartDataAvailable(UNBdevClick.Socket.A)
```

## Parameters

* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Returns

A boolean: true when the controller available-byte count is greater than zero; false otherwise.

## Usage notes

A true value does not guarantee that a whole message or line has arrived.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
if (UNBdevClick.uartDataAvailable(UNBdevClick.Socket.A)) {
    basic.showString(UNBdevClick.uartReadString(UNBdevClick.Socket.A))
}
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
