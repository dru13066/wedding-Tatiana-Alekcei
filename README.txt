V9
- calendar-front replaced by the exact uploaded calendar-front 1.pdf.
- PDF is rendered with an alpha channel; transparent areas stay transparent.
- The flower-photo duplication in the final timer block is removed.
- Final photo is rebuilt from the untouched original Figma render.
- Only the white pixels belonging to the old static timer line are locally inpainted.
- No rectangular photo patch is copied, so there is no duplicated flower/background rectangle.
- Live timer remains a separate HTML layer.

V11
- Убран огромный пустой участок перед «Программой дня».
- Причина была в завышенной высоте .envelope-stage: aspect-ratio 1624/2698.
- Поставлен реальный размер calendar-front-1.png: 1624/2153.
- Убран лишний padding-bottom календарного блока на desktop и mobile.
