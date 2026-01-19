# 🏛️ Blueprint Modul: Sistem Operasional - PRSU (Pusat Rekreasi Sumatera Utara)
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

---

## 1. Latar Belakang

### Deskripsi Unit Bisnis
PRSU (Pusat Rekreasi Sumatera Utara) adalah venue/gedung serbaguna yang dikelola oleh PT PPSU untuk berbagai jenis event:
- Pameran & exhibition
- Konser & pertunjukan
- Seminar & konferensi
- Wedding & celebration
- Bazaar & festival
- Event pemerintah

### Kondisi Saat Ini (As-Is)

| Aspek | Kondisi | Risiko/Masalah |
|-------|---------|----------------|
| Booking | Manual via telepon/WA | Double booking, tidak terdokumentasi |
| Jadwal | Kalender kertas/Excel | Sulit tracking, tidak real-time |
| Approval | Verbal/tidak terstruktur | Tidak ada audit trail |
| Pembayaran | Manual, terpisah dari sistem | Rekonsiliasi lama |
| Kontrak | File terpisah | Sulit tracking status |

### Dampak Masalah
- ⚠️ Risiko double booking gedung
- ⏱️ Approval lama tanpa tracking
- 💸 Piutang tidak termonitor
- 📊 Tidak ada dashboard okupansi

---

## 2. Tujuan Modul

> **Membangun sistem manajemen venue terintegrasi dengan booking online, approval workflow berjenjang, jadwal kalender visual, dan integrasi pembayaran ke modul Keuangan.**

### Sasaran Utama
1. ✅ Booking online dengan ketersediaan real-time
2. ✅ Approval workflow berjenjang berdasarkan nilai & jenis event
3. ✅ Kalender visual dengan indikator warna status booking
4. ✅ Manajemen kontrak & document tracking
5. ✅ Integrasi otomatis ke Keuangan (AR, Pendapatan)

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Direksi | Approval event besar | Dashboard pendapatan, approval |
| Manajer PRSU | Kelola operasional | Jadwal, booking, laporan |
| Staff PRSU | Operasional harian | Input booking, koordinasi |
| Customer | Penyewa venue | Booking, pembayaran, info |
| Marketing | Promosi | Ketersediaan, pricing |
| Keuangan | Collecting & rekon | Invoice, AR, pembayaran |

---

## 4. Kebutuhan Fungsional

### 4.1 Manajemen Venue & Fasilitas

```
FR-PRSU-001: Sistem dapat mencatat data venue (nama, kapasitas, fasilitas)
FR-PRSU-002: Sistem dapat mencatat zona/area dalam venue
FR-PRSU-003: Sistem dapat setup harga sewa per venue/zona
FR-PRSU-004: Sistem dapat mencatat fasilitas tambahan (sound, lighting, AC)
FR-PRSU-005: Sistem dapat set blackout dates (hari libur, maintenance)
```

**Zona/Area PRSU:**
- 🏟️ Hall Utama (kapasitas 5000)
- 🎭 Hall Eksibisi A, B, C
- 🎤 Ruang Seminar (kapasitas 200)
- 🌳 Area Outdoor/Lapangan
- 🅿️ Parkir VIP

### 4.2 Booking & Reservasi

```
FR-PRSU-010: Customer dapat cek ketersediaan venue via website
FR-PRSU-011: Customer dapat submit booking request online
FR-PRSU-012: Sistem generate nomor booking otomatis
FR-PRSU-013: Sistem dapat mencatat detail event (nama, jenis, tanggal, durasi)
FR-PRSU-014: Sistem menghitung estimasi biaya otomatis
FR-PRSU-015: Sistem dapat block tanggal sementara (hold)
FR-PRSU-016: Sistem dapat cancel booking dengan kebijakan
```

### 4.3 Approval Workflow Berjenjang

> [!IMPORTANT]
> Approval dilakukan berdasarkan **nilai kontrak** dan **jenis event**

```
FR-PRSU-020: Sistem menerapkan approval workflow berdasarkan nilai
FR-PRSU-021: Approver dapat approve/reject via dashboard/mobile
FR-PRSU-022: Sistem mencatat histori approval dengan timestamp
FR-PRSU-023: Sistem mengirim notifikasi ke approver berikutnya
FR-PRSU-024: Sistem dapat eskalasi jika approval timeout
FR-PRSU-025: Direksi dapat override approval
```

**Approval Matrix:**

| Nilai Kontrak | Jenis Event | Approver Level 1 | Approver Level 2 | Approver Level 3 |
|---------------|------------|------------------|------------------|------------------|
| < Rp 25 juta | Reguler | Staff Senior | Manajer PRSU | - |
| Rp 25-100 juta | Reguler | Manajer PRSU | Kadiv Operasional | - |
| > Rp 100 juta | Reguler | Manajer PRSU | Kadiv Operasional | Direktur Operasional |
| Any | Pemerintah/VIP | Manajer PRSU | Direktur Operasional | Direktur Utama |
| Any | Event Sensitif | Manajer PRSU | Direktur Operasional | Direktur Utama |

**Approval Status Flow:**
```
Draft → Submitted → Level 1 Review → Level 2 Review → Level 3 Review → Approved
                         ↓               ↓                ↓
                      Rejected        Rejected          Rejected
```

### 4.4 Kalender & Visualisasi Jadwal

```
FR-PRSU-030: Sistem menampilkan kalender bulanan per venue
FR-PRSU-031: Kalender menampilkan indikator warna status booking
FR-PRSU-032: Kalender dapat filter per venue/zona
FR-PRSU-033: Kalender dapat drill-down ke detail event
FR-PRSU-034: Dashboard menampilkan okupansi per periode
```

**Indikator Warna Kalender:**

| Warna | Status | Keterangan |
|-------|--------|------------|
| 🟢 Hijau | Available | Tersedia untuk booking |
| 🟡 Kuning | Hold/Pending | Booking pending approval |
| 🟠 Oranye | Partially Booked | Sebagian zona terisi |
| 🔴 Merah | Fully Booked | Semua zona terisi |
| ⚫ Abu-abu | Blackout | Tidak tersedia (maintenance/holiday) |
| 🔵 Biru | Confirmed | Booking approved & paid |

### 4.5 Kontrak & Dokumen

```
FR-PRSU-040: Sistem dapat generate draft kontrak otomatis
FR-PRSU-041: Sistem dapat tracking status tanda tangan kontrak
FR-PRSU-042: Sistem menyimpan dokumen kontrak (upload PDF)
FR-PRSU-043: Sistem dapat tracking dokumen pendukung (izin, dll)
```

### 4.6 Pembayaran & Integrasi Keuangan

```
FR-PRSU-050: Sistem dapat generate invoice berdasarkan kontrak
FR-PRSU-051: Sistem dapat mencatat pembayaran (DP, pelunasan)
FR-PRSU-052: Sistem dapat tracking status pembayaran
FR-PRSU-053: Setiap pembayaran otomatis posting ke Keuangan
FR-PRSU-054: Sistem dapat generate laporan AR aging
FR-PRSU-055: Sistem mengirim reminder pembayaran otomatis
```

### 4.7 AI-Powered Demand Optimization

> [!IMPORTANT]
> Solusi AI untuk mengoptimalkan okupansi venue ketika PRSU tidak diminati

```
FR-PRSU-060: AI menganalisis trend booking historis
FR-PRSU-061: AI memprediksi demand per venue/periode
FR-PRSU-062: AI merekomendasikan dynamic pricing
FR-PRSU-063: AI mengidentifikasi periode low-demand
FR-PRSU-064: AI merekomendasikan strategi marketing
FR-PRSU-065: Sistem dapat generate promo otomatis
FR-PRSU-066: AI merekomendasikan jenis event yang sesuai musim
FR-PRSU-067: Dashboard menampilkan AI insights & recommendations
```

**4.7.1 Demand Forecasting (Prediksi Permintaan)**

| Fitur | Deskripsi | Data Source |
|-------|-----------|-------------|
| Seasonal Pattern | Identifikasi pola musiman (libur, weekend) | 2+ tahun booking data |
| Event Trend | Tren jenis event yang populer | Historical bookings |
| Lead Time Analysis | Jarak booking - event date | Booking timestamps |
| Churn Prediction | Customer yang unlikely repeat | Customer behavior |

**4.7.2 Dynamic Pricing Engine**

| Kondisi Demand | Strategi AI | Contoh Adjustment |
|----------------|-------------|-------------------|
| 🔴 Very Low (<20% occupancy forecast) | Aggressive Discount | -30% to -50% |
| 🟠 Low (20-40% occupancy forecast) | Moderate Discount | -15% to -25% |
| 🟡 Normal (40-70% occupancy forecast) | Standard Price | 0% |
| 🟢 High (70-90% occupancy forecast) | Premium Price | +10% to +20% |
| 🔵 Peak (>90% occupancy forecast) | Peak Premium | +25% to +40% |

**Fee Breakdown Dynamic:**
```
Standard Rate: Rp 50.000.000/hari (Hall Utama)

Low Season (-30%):
  - Hall Utama: Rp 35.000.000/hari
  - Bonus: Free sound system (worth Rp 5.000.000)

Peak Season (+25%):
  - Hall Utama: Rp 62.500.000/hari
  - Minimum booking: 2 hari
```

**4.7.3 AI-Powered Recommendations**

| Kondisi | AI Recommendation | Action |
|---------|------------------|--------|
| Low demand period detected | Suggest promo campaign | Auto-generate promo |
| No booking 14+ days ahead | Early bird discount | Push notification |
| Similar events trending | Suggest event to organizers | Email marketing |
| Repeat customer inactive | Win-back offer | Personalized promo |
| Competitor has similar event | Competitive pricing | Price adjustment |

**4.7.4 Automated Marketing Triggers**

```
IF occupancy_forecast(next_30_days) < 40%:
    → Generate promo package
    → Send email blast to past customers  
    → Post social media ads
    → Enable "flash sale" pricing

IF venue_idle_days >= 14:
    → Send targeted offers to event organizers
    → Suggest collaboration dengan EO partners
    → Recommend untuk event internal/CSR

IF high_margin_event_trend detected:
    → Prioritize marketing untuk jenis event tersebut
    → Create custom package
```

**4.7.5 AI Insights Dashboard**

| Metric | Visualization | Update |
|--------|---------------|--------|
| Demand Forecast | Line chart 30-90 hari | Daily |
| Low Demand Alert | Calendar heatmap | Real-time |
| Price Recommendation | Dynamic pricing card | Daily |
| Marketing ROI | Campaign performance | Weekly |
| Customer Segments | Pie chart | Monthly |

**4.7.6 Promo Package Generator (AI-Assisted)**

| Package Type | Trigger | Contents |
|--------------|---------|----------|
| Early Bird | >30 hari sebelum event | 20% off + free parking |
| Last Minute | <7 hari sebelum, kosong | 40% off + negotiable |
| Bundle Package | 2+ venue booking | 25% off total |
| Loyalty Reward | Customer 3+ events/year | 15% off + priority booking |
| Off-Peak Special | Weekday + low season | 35% off + free facilities |

---

## 5. Integrasi Real-time dengan Keuangan

> [!IMPORTANT]
> Setiap booking confirmed otomatis tercatat sebagai AR di Keuangan

### 5.1 Dari PRSU → Keuangan

| Event di PRSU | Trigger ke Keuangan |
|---------------|---------------------|
| Booking Approved | Create AR Invoice |
| Pembayaran DP | Jurnal: Bank → Down Payment |
| Pembayaran Pelunasan | Jurnal: Bank → Pendapatan Sewa |
| Invoice Overdue | Update status AR aging |

### 5.2 Struktur Jurnal

```
PEMBAYARAN DOWN PAYMENT:
DEBIT:  1101 - Bank                        xxx
KREDIT: 2301 - Uang Muka Pelanggan         xxx

PELUNASAN (setelah event):
DEBIT:  1101 - Bank                        xxx
DEBIT:  2301 - Uang Muka Pelanggan         xxx
KREDIT: 4101 - Pendapatan Sewa Venue       xxx
KREDIT: 4102 - Pendapatan Fasilitas        xxx
```

### 5.3 API Integration Points

```
POST /api/keuangan/ar/create            → Create AR Invoice
POST /api/keuangan/jurnal/pembayaran    → Record payment
GET  /api/keuangan/ar/aging             → Get AR aging report
POST /api/keuangan/reminder             → Trigger payment reminder
```

---

## 6. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | Availability | 24/7 untuk public booking |
| NFR-02 | Performance | Calendar load < 2 detik |
| NFR-03 | Mobile | Responsive + mobile approval |
| NFR-04 | Notification | Email + WA + push notification |
| NFR-05 | Audit | Log semua perubahan booking |
| NFR-06 | Security | Role-based access, data encryption |

---

## 7. Diagram Proses Bisnis

### 7.1 Alur Booking & Approval

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Customer   │───▶│   Check     │───▶│   Submit    │───▶│   Generate  │
│   Request   │    │ Availability│    │   Booking   │    │ Estimate    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                               │
                        ┌──────────────────────────────────────┘
                        ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Approval   │◀───│  Approval   │◀───│  Approval   │◀───│   PENDING   │
│  Level 3    │    │  Level 2    │    │  Level 1    │    │   APPROVAL  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
      │                                     │
      ▼                                     ▼
┌─────────────┐                       ┌─────────────┐
│  APPROVED   │                       │  REJECTED   │
│  Generate   │                       │  Notify     │
│  Contract   │                       │  Customer   │
└─────────────┘                       └─────────────┘
      │
      ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Invoice   │───▶│  Pembayaran │───▶│   EVENT     │
│   + AR      │    │    DP       │    │   EXECUTE   │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 7.2 Status Transition

```
DRAFT ──▶ SUBMITTED ──▶ LEVEL1_REVIEW ──▶ LEVEL2_REVIEW ──▶ LEVEL3_REVIEW
                              │                │                  │
            ┌─────────────────┼────────────────┼──────────────────┘
            │                 ▼                ▼
            │           [REJECTED] ◀───────────┘
            ▼
      [APPROVED] ──▶ CONTRACT_SENT ──▶ CONTRACT_SIGNED ──▶ INVOICED
                                              │
                                              ▼
      [COMPLETED] ◀── EVENT_EXECUTED ◀── PAID/PARTIAL_PAID
```

---

## 8. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **Venue** | id, name, capacity, hourly_rate, daily_rate, status |
| **Zone** | id, venue_id, name, capacity, rate |
| **Facility** | id, name, unit_price, is_included |
| **Booking** | id, booking_number, customer_id, event_date, status |
| **BookingDetail** | id, booking_id, venue_id, zone_id, start_time, end_time |
| **BookingFacility** | id, booking_id, facility_id, qty, price |
| **Customer** | id, name, company, phone, email, npwp |
| **ApprovalLog** | id, booking_id, level, approver_id, status, timestamp, notes |
| **Contract** | id, booking_id, contract_number, signed_date, document_url |
| **Invoice** | id, booking_id, invoice_number, amount, due_date, status |
| **Payment** | id, invoice_id, payment_date, amount, method, reference |
| **CalendarBlock** | id, venue_id, date, status, booking_id |

---

## 9. Role & Permission Matrix

| Fitur | Customer | Staff | Manajer | Kadiv | Direktur | Keuangan |
|-------|:--------:|:-----:|:-------:|:-----:|:--------:|:--------:|
| Cek Ketersediaan | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Submit Booking | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Approve Level 1 | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Approve Level 2 | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ |
| Approve Level 3 | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Kelola Venue | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Generate Invoice | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Input Pembayaran | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Lihat Laporan | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 10. Laporan yang Dibutuhkan

### Laporan Operasional
1. Kalender Booking Bulanan
2. Tingkat Okupansi per Venue
3. Laporan Event Harian/Mingguan/Bulanan
4. Laporan Status Approval

### Laporan Keuangan
1. Pendapatan per Venue
2. Pendapatan per Jenis Event
3. AR Aging Report
4. Laporan Pembayaran

---

## 11. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Master Data (Venue, Zona, Fasilitas) | 2 minggu |
| **Fase 2** | Booking Engine + Calendar | 4 minggu |
| **Fase 3** | Approval Workflow | 3 minggu |
| **Fase 4** | Contract Management | 2 minggu |
| **Fase 5** | Payment + Integrasi Keuangan | 3 minggu |
| **Fase 6** | Customer Portal | 2 minggu |
| **Fase 7** | UAT & Go-live | 2 minggu |
| | **Total** | **18 minggu** |

---

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Double booking | Tinggi | Real-time locking, conflict check |
| Approval delay | Sedang | Auto-escalation, mobile approval |
| Payment not tracked | Sedang | AR aging alert, auto-reminder |
| Data loss | Tinggi | Backup, audit trail |

---

## 13. Kriteria Sukses (KPI)

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| Zero double booking | 0 incident | Incident report |
| Approval TAT | < 3 hari kerja | Avg approval time |
| Payment collection | > 95% | AR aging |
| Occupancy rate | > 60% | Booking data |
| Customer satisfaction | > 4.0/5 | Survey |

---

## 14. Kesimpulan

Sistem Operasional PRSU akan:

> [!IMPORTANT]
> - **Mencegah** double booking dengan calendar locking
> - **Mempercepat** proses approval dengan workflow berjenjang
> - **Memvisualisasikan** jadwal dengan kalender berwarna
> - **Mengintegrasikan** pembayaran langsung ke Keuangan

Fitur unggulan:
- 📅 **Kalender Visual** - Warna status booking (hijau/kuning/merah)
- ✅ **Approval Berjenjang** - Berdasarkan nilai & jenis event
- 📄 **Contract Management** - Generate & tracking kontrak
- 💰 **AR Integration** - Invoice & payment tracking otomatis

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 1.0 | Tanggal: 18 Januari 2026*
