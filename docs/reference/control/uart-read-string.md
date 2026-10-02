# Read Click UART string

Read the text currently waiting in a Click socket UART receive buffer.

```sig
UNBdevClick.uartReadString(UNBdevClick.Socket.A)
```

## Parameters

* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Returns

A string decoded from the number of bytes the controller reports as available, or an empty string when no bytes are waiting. This is a current-buffer read, not a wait for a complete line.

## Usage notes

Use UART data available to check before reading. Message framing and partial-message handling belong to your module protocol.

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
