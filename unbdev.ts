/**
 * Unified toolbox category for the integrated UNBdev.board.
 *
 * Feature implementations retain their established TypeScript namespaces;
 * blockNamespace metadata routes their blocks here for one student-facing
 * toolbox entry.
 *
 * `subcategories` \u2014 not `groups` \u2014 is what makes this entry expand into
 * per-feature rows. The toolbox builds nested rows only from `subcategories`
 * (webapp/src/toolboxeditor.tsx), and binds a block to a row when the block's
 * `subcategory` attribute matches the row name (webapp/src/blocks.tsx,
 * `filterBlocks`). `groups` renders flat section headers inside a flyout, so
 * the two are not interchangeable.
 *
 * The feature rows keep b.Board's order and icons, but the names drop the
 * `BBoard_` prefix its source uses: `Mic`, `BLiXel`, `WiFi`, `Control` and
 * `Motor`.
 * A block that is both `advanced=true` and tagged with one of these
 * subcategories goes into a `more` row nested inside that feature row, like
 * each control on code.brilliantlabs.ca. Advanced blocks without a
 * subcategory still use the namespace-level `more` row.
 *
 * `subcategoryIcons` supplies the same recognizable microphone, spinner,
 * Wi-Fi, microchip, and gear cues used by b.Board. It is consumed by the
 * pinned UNB PXT framework's nested-category renderer.
 *
 * `Control` carries the student-facing Click socket blocks ported from
 * Brilliant Labs' bBoard_Control; see UNB-ECE/unblabs-platform#87.
 *
 * The entry is deliberately not `advanced`. An extension installed through
 * the Extensions dialog is drawn in the band between the Extensions row and
 * Advanced (webapp/src/toolbox.tsx, `getNonAdvancedCategories`), which is
 * where b.Board puts it too, so the namespace must stay non-advanced for the
 * editor to place it there. `advanced=true` here would move the whole entry
 * below the Advanced row instead.
 *
 * The per-block `advanced=true` attributes are a separate mechanism: they put
 * helper blocks behind each feature row's `more`, and they work the same
 * whether or not the namespace is advanced.
 */
//% color=#9E4894 icon="\uf2db" block="UNBdev.board"
//% weight=98 subcategories='["Mic", "BLiXel", "WiFi", "Control", "Motor"]'
//% subcategoryIcons='{"Mic":"\uf130","BLiXel":"\uf110","WiFi":"\uf1eb","Control":"\uf2db","Motor":"\uf085"}'
namespace UNBDev {
    // Keep namespace metadata available without exposing an extra block.
    //% blockHidden=true
    export function categoryMarker(): void { }
}
