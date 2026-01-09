# Visual Gap Analysis: Round 2
## Dynamic Landing Page vs Static HTML Reference

Based on the uploaded screenshots, I've identified the following remaining visual differences:

---

## Screenshot Analysis

````carousel
![Dynamic Hero - Image 0](/home/pete/.gemini/antigravity/brain/de8a6e54-9e8f-486d-9c08-9ca01869ab6a/uploaded_image_0_1767972629545.png)
<!-- slide -->
![Static Alchemy Section - Image 1](/home/pete/.gemini/antigravity/brain/de8a6e54-9e8f-486d-9c08-9ca01869ab6a/uploaded_image_1_1767972629545.png)
<!-- slide -->
![Static Newsletter Section - Image 2](/home/pete/.gemini/antigravity/brain/de8a6e54-9e8f-486d-9c08-9ca01869ab6a/uploaded_image_2_1767972629545.png)
<!-- slide -->
![Dynamic Hero with Cart - Image 3](/home/pete/.gemini/antigravity/brain/de8a6e54-9e8f-486d-9c08-9ca01869ab6a/uploaded_image_3_1767972629545.png)
<!-- slide -->
![Dynamic Alchemy Section - Image 4](/home/pete/.gemini/antigravity/brain/de8a6e54-9e8f-486d-9c08-9ca01869ab6a/uploaded_image_4_1767972629545.png)
````

---

## Identified Visual Gaps

### Gap 1: Cart Icon Design (Header)
| Aspect | Static Reference | Dynamic Page |
|--------|------------------|--------------|
| **Icon Shape** | Shopping bag with curved handle | Vial/test tube shape |
| **Label** | "Vial" tooltip | "Vial Collection" label visible |
| **Badge Position** | Small circle counter | Same |

**Analysis:** The static reference uses a classic shopping bag icon (lines 122-126 of index.html) while the dynamic page uses a vial icon. Both are thematically appropriate, but differ visually.

**Decision:** The vial icon better matches the "Atelier" alchemical aesthetic. **LOW PRIORITY** - Consider keeping the vial icon as an intentional improvement.

---

### Gap 2: Newsletter Section Title
| Aspect | Static Reference (Image 2) | Dynamic Page |
|--------|----------------------------|--------------|
| **Title Line 1** | "Receive Our" | "Join Our" |
| **Title Line 2** | "Quarterly Folio" | "Correspondence" |

**Impact:** Medium - Different terminology, but both convey newsletter signup.

**Fix Required:** Update newsletter title to match static reference.

---

### Gap 3: Newsletter Form Fields
| Aspect | Static Reference (Image 2) | Dynamic Page |
|--------|----------------------------|--------------|
| **Fields** | Name field + Email field | Email field only |
| **Placeholders** | "Your name", "Your email address" | "your.correspondence@example.com" |

**Impact:** Medium - Static has 2 input fields, dynamic has 1.

**Fix Required:** Add name field to match static reference.

---

### Gap 4: Alchemy Section - Already Aligned ✅
Comparing Image 1 (static) and Image 4 (dynamic):
- ✅ Roman numerals (I, II, III, IV) - ALIGNED
- ✅ Step titles (Nigredo, Albedo, Citrinitas, Rubedo) - ALIGNED
- ✅ Duration and Method labels - ALIGNED
- ✅ Apparatus grid at bottom - ALIGNED (both show circular placeholders)

---

## Remediation Plan

### Phase 1: Newsletter Section Alignment

#### 1.1 Update Title Text
**File:** `src/components/sections/newsletter-section.tsx`

**Current (line 108-111):**
```tsx
<span className="correspondence__title-line">Join Our</span>
<span className="correspondence__title-line correspondence__title-line--emph">Correspondence</span>
```

**Target:**
```tsx
<span className="correspondence__title-line">Receive Our</span>
<span className="correspondence__title-line correspondence__title-line--emph">Quarterly Folio</span>
```

---

#### 1.2 Add Name Field
**File:** `src/components/sections/newsletter-section.tsx`

**Add before email field (around line 120):**
```tsx
<div className="correspondence__field">
  <label htmlFor="correspondenceName" className="visually-hidden">Your name</label>
  <input
    type="text"
    id="correspondenceName"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Your name"
    className="correspondence__input"
    disabled={isSubmitting}
  />
  <div className="correspondence__field-ornament"></div>
</div>
```

**Required state addition:**
```tsx
const [name, setName] = useState('')
```

---

### Phase 2: Cart Icon (Optional - Low Priority)
The current vial icon is arguably more thematically appropriate for an aromatherapy atelier. This can be left as-is or updated if strict visual parity is required.

If updating is desired:
**File:** `src/components/layout/header.tsx` (lines 89-93)

**Current:**
```tsx
<svg width="20" height="20" viewBox="0 0 24 24">
  <path d="M9 2h6v4H9z" />
  <path d="M9 6v5a3 3 0 003 3v0a3 3 0 003-3V6" />
  <path d="M6 22h12a2 2 0 002-2v-6a6 6 0 00-6-6h0a6 6 0 00-6 6v6a2 2 0 002 2z" />
</svg>
```

**Target (shopping bag from static):**
```tsx
<svg width="20" height="20" viewBox="0 0 24 24">
  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
  <path d="M3 6h18"/>
  <path d="M16 10a4 4 0 01-8 0"/>
</svg>
```

---

## Summary of Required Changes

| Gap | File | Priority | Change |
|-----|------|----------|--------|
| Newsletter Title | newsletter-section.tsx | Medium | Update title text |
| Name Field | newsletter-section.tsx | Medium | Add name input field + state |
| Cart Icon | header.tsx | Low | Optional - change to shopping bag |

---

## Questions for User

1. **Cart Icon:** Should I update the cart icon from vial to shopping bag to match the static reference exactly? The vial icon could be considered a deliberate improvement matching the alchemical theme.

2. **Form Validation:** Should the name field be required or optional?
