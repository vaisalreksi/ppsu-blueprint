# ⚠️ Blueprint Modul: Sistem Manajemen Risiko
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

---

## 1. Latar Belakang

### Deskripsi
Manajemen Risiko adalah proses sistematis untuk mengidentifikasi, menganalisis, mengevaluasi, dan mengendalikan risiko yang dapat mempengaruhi pencapaian tujuan organisasi. Sebagai BUMD yang mengelola berbagai unit bisnis (transportasi, venue, proyek infrastruktur), PT PPSU memerlukan sistem manajemen risiko terintegrasi.

### Kondisi Saat Ini (As-Is)

| Aspek | Kondisi | Risiko/Masalah |
|-------|---------|----------------|
| Identifikasi Risiko | Ad-hoc, tidak terstruktur | Risiko tidak terdeteksi dini |
| Risk Register | Tidak ada/Excel terpisah | Tidak update, sulit monitoring |
| Risk Assessment | Tidak konsisten | Subjektif, tidak terstandar |
| Mitigasi | Reaktif | Terlambat menangani |
| Monitoring | Manual/berkala | Tidak real-time |
| Reporting | Laporan tahunan manual | Data tidak akurat |

### Kebutuhan Regulasi
- POJK tentang Penerapan Manajemen Risiko BUMN/BUMD
- ISO 31000:2018 Risk Management Guidelines
- COSO Enterprise Risk Management Framework

---

## 2. Tujuan Modul

> **Membangun sistem manajemen risiko terintegrasi dengan risk register digital, penilaian risiko terstandar (likelihood × impact), heat map visualisasi, monitoring mitigasi, dan dashboard early warning system.**

### Sasaran Utama
1. ✅ Risk register digital terintegrasi semua unit
2. ✅ Risk assessment dengan matriks likelihood × impact
3. ✅ Risk heat map untuk visualisasi
4. ✅ Mitigasi tracking dengan timeline
5. ✅ KRI (Key Risk Indicators) monitoring
6. ✅ Early warning system dengan alert

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Dewan Komisaris | Oversight | Laporan risiko strategis |
| Direksi | Decision making | Dashboard, early warning |
| Manajer Unit | Risk owner | Input risiko, mitigasi |
| Risk Officer | Koordinasi | Risk register, assessment |
| Internal Audit | Assurance | Review kontrol, audit trail |
| Semua Unit | Operasional | Awareness, reporting |

---

## 4. Kebutuhan Fungsional

### 4.1 Risk Register (Daftar Risiko)

```
FR-RM-001: Sistem dapat mencatat risiko dengan kategori terstandar
FR-RM-002: Sistem dapat assign risk owner per risiko
FR-RM-003: Sistem dapat mencatat penyebab (cause) dan dampak (effect)
FR-RM-004: Sistem dapat link risiko ke unit bisnis/departemen
FR-RM-005: Sistem dapat set status risiko (identified, assessed, mitigated, closed)
FR-RM-006: Sistem menyimpan histori perubahan risiko (audit trail)
```

**Kategori Risiko:**
- 📊 **Strategis** - Risiko terkait strategi bisnis
- 💰 **Keuangan** - Risiko likuiditas, kredit, market
- ⚙️ **Operasional** - Risiko proses, sistem, SDM
- ✅ **Kepatuhan** - Risiko regulasi, hukum
- 🌍 **External** - Risiko lingkungan, politik, bencana
- 💻 **Teknologi** - Risiko IT, cybersecurity

### 4.2 Risk Assessment (Penilaian Risiko)

```
FR-RM-010: Sistem dapat menilai likelihood (probabilitas) risiko
FR-RM-011: Sistem dapat menilai impact (dampak) risiko
FR-RM-012: Sistem menghitung risk score (likelihood × impact)
FR-RM-013: Sistem menentukan risk level (low/medium/high/extreme)
FR-RM-014: Sistem dapat menilai inherent risk (sebelum kontrol)
FR-RM-015: Sistem dapat menilai residual risk (setelah kontrol)
FR-RM-016: Sistem dapat compare inherent vs residual risk
```

**Skala Likelihood (1-5):**

| Skor | Level | Probabilitas | Frekuensi |
|------|-------|-------------|-----------|
| 1 | Rare | < 5% | 1x dalam 10 tahun |
| 2 | Unlikely | 5-25% | 1x dalam 5 tahun |
| 3 | Possible | 25-50% | 1x dalam 3 tahun |
| 4 | Likely | 50-75% | 1x dalam 1 tahun |
| 5 | Almost Certain | > 75% | Beberapa kali setahun |

**Skala Impact (1-5):**

| Skor | Level | Finansial | Reputasi | Operasional |
|------|-------|-----------|----------|-------------|
| 1 | Insignificant | < Rp 100 jt | Tidak ada media | < 1 hari |
| 2 | Minor | Rp 100-500 jt | Media lokal | 1-3 hari |
| 3 | Moderate | Rp 500 jt - 1 M | Media regional | 1-2 minggu |
| 4 | Major | Rp 1-5 M | Media nasional | 1-3 bulan |
| 5 | Catastrophic | > Rp 5 M | Media internasional | > 3 bulan |

**Risk Matrix (Heat Map):**

```
 Impact
   5 │  5   10   15   20   25
   4 │  4    8   12   16   20
   3 │  3    6    9   12   15
   2 │  2    4    6    8   10
   1 │  1    2    3    4    5
     └────────────────────────
       1    2    3    4    5  Likelihood

🟢 1-4: Low Risk      → Accept/Monitor
🟡 5-9: Medium Risk   → Control/Reduce
🟠 10-15: High Risk   → Mitigate/Transfer
🔴 16-25: Extreme     → Immediate Action Required
```

### 4.3 Risk Mitigation (Penanganan Risiko)

```
FR-RM-020: Sistem dapat mencatat rencana mitigasi per risiko
FR-RM-021: Sistem dapat set PIC dan deadline mitigasi
FR-RM-022: Sistem dapat tracking progress mitigasi (%)
FR-RM-023: Sistem dapat mencatat biaya mitigasi
FR-RM-024: Sistem dapat set tipe mitigasi (avoid, reduce, transfer, accept)
FR-RM-025: Sistem mengirim reminder untuk mitigasi overdue
```

**Tipe Penanganan Risiko (4T):**
- 🚫 **Terminate (Avoid)** - Hindari aktivitas berisiko
- 📉 **Treat (Reduce)** - Kurangi likelihood/impact
- 🔄 **Transfer** - Asuransi, outsourcing
- ✅ **Tolerate (Accept)** - Terima dengan monitoring

### 4.4 Key Risk Indicators (KRI)

```
FR-RM-030: Sistem dapat setup KRI per kategori risiko
FR-RM-031: Sistem dapat set threshold (green/yellow/red)
FR-RM-032: Sistem dapat input actual KRI value
FR-RM-033: Dashboard menampilkan KRI status real-time
FR-RM-034: Sistem mengirim alert jika KRI melampaui threshold
FR-RM-035: Sistem dapat link KRI ke risiko terkait
```

**Contoh KRI:**

| Kategori | KRI | Green | Yellow | Red |
|----------|-----|-------|--------|-----|
| Keuangan | AR Aging > 90 hari | < 5% | 5-10% | > 10% |
| Operasional | Project SPI | > 0.95 | 0.8-0.95 | < 0.8 |
| Kepatuhan | Open Audit Findings | < 5 | 5-10 | > 10 |
| HR | Turnover Rate | < 5% | 5-10% | > 10% |

### 4.5 Monitoring & Dashboard

```
FR-RM-040: Dashboard menampilkan risk heat map
FR-RM-041: Dashboard menampilkan top 10 risks
FR-RM-042: Dashboard menampilkan risk trend (naik/turun)
FR-RM-043: Dashboard menampilkan mitigasi overdue
FR-RM-044: Dashboard menampilkan KRI status overview
FR-RM-045: Early warning jika ada risiko baru level high/extreme
```

### 4.6 Monitoring Pengelolaan Manajemen Risiko

> [!IMPORTANT]
> Monitoring pengelolaan memastikan semua risiko ditangani sesuai rencana mitigasi

```
FR-RM-046: Dashboard menampilkan summary status mitigasi (Selesai/Ongoing/Overdue/Pending)
FR-RM-047: Sistem menampilkan progress mitigasi per kategori risiko
FR-RM-048: Sistem menampilkan aging mitigasi yang belum selesai
FR-RM-049: Sistem dapat escalate mitigasi overdue ke manajemen
FR-RM-050: Sistem mengirim reminder ke PIC mendekati deadline
FR-RM-051: Dashboard menampilkan trend penyelesaian mitigasi
```

**Summary Status Mitigasi:**

| Status | Jumlah | Keterangan |
|--------|--------|------------|
| ✅ Selesai | 28 | Mitigasi sudah selesai & verified |
| 🔄 Ongoing | 8 | Mitigasi sedang berjalan |
| ⚠️ Overdue | 2 | Lewat deadline, perlu escalation |
| ⏳ Pending | 5 | Belum dimulai |

**Progress Mitigasi per Kategori:**

| Kategori | Selesai/Total | Progress |
|----------|---------------|----------|
| 💰 Keuangan | 8/10 | 80% ✅ |
| ⚙️ Operasional | 12/15 | 80% ✅ |
| 🏗️ Proyek | 3/8 | 37% ⚠️ |
| 👥 SDM | 5/5 | 100% ✅ |

### 4.7 Arsip Digital Risiko

> [!NOTE]
> Arsip digital menyimpan seluruh dokumen pendukung risiko dalam repository terpusat

```
FR-RM-055: Sistem dapat upload dokumen risiko (Evidence, Laporan, Foto)
FR-RM-056: Sistem mengkategorikan dokumen per risiko dan periode
FR-RM-057: Sistem menyediakan fitur search dan filter dokumen
FR-RM-058: Sistem dapat preview dokumen tanpa download
FR-RM-059: Sistem dapat export dokumen (single/batch)
FR-RM-060: Sistem mencatat histori akses dokumen (audit trail)
FR-RM-061: Sistem dapat link dokumen ke risiko tertentu
```

**Jenis Dokumen Arsip:**

| Jenis | Deskripsi | Contoh |
|-------|-----------|--------|
| 📄 Dokumen | Dokumen formal risiko | Risk_Assessment_Q1_2026.pdf |
| 📷 Evidence | Bukti pendukung (foto, screenshot) | Foto_Kerusakan_Armada.jpg |
| 📝 Laporan | Laporan mitigasi/progress | Laporan_Mitigasi_R001.docx |

**Contoh Daftar Arsip:**

| Risk ID | Nama Dokumen | Jenis | Tanggal | Uploader |
|---------|--------------|-------|---------|----------|
| R-2026-001 | 📄 Risk_Assessment_Detail.pdf | Dokumen | 18 Jan 2026 | Risk Officer |
| R-2026-001 | 📷 Evidence_Piutang_Macet.png | Evidence | 15 Jan 2026 | Staff Keuangan |
| R-2026-002 | 📝 Laporan_Mitigasi_Proyek.docx | Laporan | 14 Jan 2026 | Manajer Teknik |

**Summary Arsip:**
- Total Dokumen: 89
- 📄 Dokumen: 25
- 📷 Evidence: 42
- 📝 Laporan: 22

### 4.8 Reporting

```
FR-RM-050: Sistem dapat generate laporan risk profile per unit
FR-RM-051: Sistem dapat generate laporan risk register
FR-RM-052: Sistem dapat generate laporan mitigasi progress
FR-RM-053: Sistem dapat export laporan untuk Komisaris/Direksi
FR-RM-054: Sistem dapat generate laporan untuk regulator
```

### 4.7 Hybrid Input System (Manual + Otomatis)

> [!IMPORTANT]
> Sistem menggunakan pendekatan hybrid: input manual untuk Risk Register, 
> dan input otomatis untuk KRI dari data modul lain secara real-time.

#### 4.7.1 Manual Input - Form Risk Register

```
FR-RM-060: Sistem menyediakan form input risiko baru
FR-RM-061: Form dapat memilih kategori risiko (dropdown)
FR-RM-062: Form dapat memilih unit bisnis (dropdown)
FR-RM-063: Form dapat input penyebab dan dampak (text)
FR-RM-064: Form dapat memilih risk owner (dropdown dari master karyawan)
FR-RM-065: Form dapat input assessment (L × I) dengan skala 1-5
FR-RM-066: Form dapat input rencana mitigasi
FR-RM-067: Sistem generate risk code otomatis (R-XXXX-NNN)
```

**Form Fields Risk Input:**

| Field | Type | Required | Source |
|-------|------|:--------:|--------|
| Nama Risiko | Text | ✅ | Manual input |
| Kategori | Dropdown | ✅ | Master kategori |
| Unit Bisnis | Dropdown | ✅ | Master unit |
| Deskripsi | Textarea | ✅ | Manual input |
| Penyebab (Cause) | Textarea | ✅ | Manual input |
| Dampak (Effect) | Textarea | ✅ | Manual input |
| Risk Owner | Dropdown | ✅ | Master karyawan |
| Likelihood (1-5) | Slider/Radio | ✅ | Manual select |
| Impact (1-5) | Slider/Radio | ✅ | Manual select |
| Strategi Mitigasi | Dropdown | ❌ | Terminate/Treat/Transfer/Tolerate |
| Rencana Mitigasi | Textarea | ❌ | Manual input |
| PIC Mitigasi | Dropdown | ❌ | Master karyawan |
| Deadline Mitigasi | Datepicker | ❌ | Manual input |

#### 4.7.2 Otomatis - KRI Sync dari Modul Lain

```
FR-RM-070: Sistem secara otomatis mengambil data KRI dari modul lain
FR-RM-071: Data KRI di-sync setiap 15 menit (atau real-time)
FR-RM-072: Dashboard menampilkan source module per KRI
FR-RM-073: User dapat click drill-down ke modul asal
FR-RM-074: Sistem auto-calculate KRI status (green/yellow/red)
```

**KRI Auto-Sync Configuration:**

| KRI | API Source | Modul | Sync Frequency |
|-----|------------|-------|----------------|
| AR Aging > 90 hari | `/api/keuangan/ar/aging` | Keuangan | 15 menit |
| Project SPI Average | `/api/teknik/projects/spi` | Teknik | 1 jam |
| Ferry Capacity | `/api/transportasi/capacity` | Transportasi | Real-time |
| PRSU Occupancy | `/api/prsu/occupancy` | PRSU | 1 jam |
| Employee Turnover | `/api/hr/turnover` | Human Capital | Harian |
| Open Audit Findings | `/api/cacm/findings/open` | CACM | 1 jam |

#### 4.7.3 Auto-Generate Risk dari KRI Breach

```
FR-RM-080: Sistem dapat auto-create risk jika KRI breach threshold
FR-RM-081: Auto-generated risk memiliki status "Identified - Auto"
FR-RM-082: Sistem assign risk owner berdasarkan KRI owner
FR-RM-083: Sistem notifikasi risk owner untuk review & complete assessment
FR-RM-084: Auto-risk dapat di-merge dengan existing risk jika duplicate
```

**Auto-Generate Flow:**

```
KRI Breach (Red) → Check if related risk exists?
                        │
            ┌───────────┴───────────┐
            │ NO                    │ YES
            ▼                       ▼
    Create New Risk          Link ke Existing Risk
    (Status: Auto-Generated)     (Update timestamp)
            │                       │
            ▼                       ▼
    Notify Risk Owner ◀──────── Notify Risk Owner
    "Complete assessment"       "KRI breach - review mitigation"
```

**Auto-Generated Risk Template:**

```
Risk Code: R-AUTO-[YYYY]-[NNN]
Nama: "[KRI Name] - KRI Breach Alert"
Kategori: (dari KRI category)
Unit: (dari KRI unit)
Deskripsi: "Auto-generated dari KRI breach: [KRI Name] at [value]% (threshold: [threshold]%)"
Risk Owner: (dari KRI owner)
Status: Identified - Auto
Likelihood: TBD (to be assessed)
Impact: TBD (to be assessed)
```

#### 4.7.4 Drill-Down Links

```
FR-RM-085: Setiap KRI memiliki tombol "View Source"
FR-RM-086: Click akan navigate ke dashboard modul asal
FR-RM-087: Link menampilkan context (periode, filter)
```

**Drill-Down Mapping:**

| KRI | Drill-Down To | URL |
|-----|---------------|-----|
| AR Aging | Keuangan - AR Aging Report | `/modul_keuangan?tab=ar_aging` |
| Project SPI | Teknik - Project List | `/modul_teknik?tab=projects` |
| Ferry Capacity | Transportasi - Live Monitoring | `/modul_transportasi?tab=monitoring` |
| PRSU Occupancy | PRSU - Calendar | `/modul_prsu?tab=calendar` |
| Employee Turnover | HC - Dashboard | `/modul_hc?tab=dashboard` |

---

## 5. Integrasi dengan Modul Lain

> [!IMPORTANT]
> Sistem Manajemen Risiko terintegrasi dengan semua modul untuk early warning

### 5.1 Dari Modul Lain → Risk Management

| Modul Sumber | Data yang Diambil | Trigger Risk |
|--------------|-------------------|--------------|
| Keuangan | AR Aging, Cashflow | Risiko Likuiditas |
| Transportasi | CCTV, Kapasitas | Risiko Keselamatan |
| Teknik | SPI, Progress | Risiko Proyek |
| PRSU | Okupansi, Booking | Risiko Pendapatan |
| Human Capital | Turnover, Absensi | Risiko SDM |

### 5.2 API Integration Points

```
GET /api/keuangan/ar/aging          → KRI: AR Aging
GET /api/teknik/projects/spi        → KRI: Project Performance
GET /api/transportasi/capacity      → KRI: Capacity Utilization
GET /api/hr/turnover               → KRI: Employee Turnover
POST /api/risk/alert               → Send alert to dashboard
```

---

## 6. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | Availability | 99.9% uptime |
| NFR-02 | Real-time | KRI update setiap 15 menit |
| NFR-03 | Alert | Notifikasi < 1 menit |
| NFR-04 | Security | Role-based, audit trail |
| NFR-05 | Compliance | ISO 31000 compliant |
| NFR-06 | Mobile | Responsive dashboard |

---

## 7. Diagram Proses Bisnis

### 7.1 Risk Management Cycle

```
┌─────────────────────────────────────────────────────────────────┐
│                    RISK MANAGEMENT CYCLE                        │
│                                                                 │
│    ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│    │IDENTIFY  │────▶│ ASSESS   │────▶│ RESPOND  │              │
│    │ Risks    │     │ L × I    │     │ 4T       │              │
│    └──────────┘     └──────────┘     └──────────┘              │
│         ▲                                   │                   │
│         │                                   ▼                   │
│    ┌──────────┐                      ┌──────────┐              │
│    │ REPORT   │◀─────────────────────│ MONITOR  │              │
│    │          │                      │ KRI      │              │
│    └──────────┘                      └──────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 7.2 Early Warning Flow

```
KRI Breach ──▶ System Detect ──▶ Generate Alert ──▶ Notify Risk Owner
                                       │
                                       ├──▶ Email Notification
                                       ├──▶ Dashboard Warning
                                       └──▶ Mobile Push
```

---

## 8. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **Risk** | id, code, name, category, unit_id, owner_id, status |
| **RiskCategory** | id, name, description |
| **RiskAssessment** | id, risk_id, likelihood, impact, score, type (inherent/residual) |
| **RiskMitigation** | id, risk_id, action, pic_id, deadline, progress, cost |
| **RiskControl** | id, risk_id, control_name, effectiveness |
| **KRI** | id, name, category_id, unit, threshold_green, threshold_yellow |
| **KRIValue** | id, kri_id, period, value, status |
| **RiskAlert** | id, risk_id/kri_id, alert_type, severity, timestamp, read |
| **RiskAuditLog** | id, risk_id, action, old_value, new_value, user_id, timestamp |

---

## 9. Role & Permission Matrix

| Fitur | Unit Staff | Risk Officer | Manajer | Internal Audit | Direksi |
|-------|:----------:|:------------:|:-------:|:--------------:|:-------:|
| Input Risiko | ✅ | ✅ | ✅ | ❌ | ❌ |
| Assess Risiko | ❌ | ✅ | ✅ | ❌ | ❌ |
| Approve Assessment | ❌ | ❌ | ✅ | ❌ | ✅ |
| Input Mitigasi | ✅ | ✅ | ✅ | ❌ | ❌ |
| Setup KRI | ❌ | ✅ | ❌ | ❌ | ✅ |
| View Heat Map | ✅ | ✅ | ✅ | ✅ | ✅ |
| View All Unit Risks | ❌ | ✅ | ❌ | ✅ | ✅ |
| Generate Report | ❌ | ✅ | ✅ | ✅ | ✅ |
| Audit Trail | ❌ | ✅ | ❌ | ✅ | ❌ |

---

## 10. Laporan yang Dibutuhkan

### Laporan Reguler
1. Risk Profile Quarterly
2. Top 10 Risks Report
3. Mitigation Progress Report
4. KRI Dashboard Monthly

### Laporan Eksekutif
1. Board Risk Report (untuk Komisaris)
2. Executive Risk Summary (untuk Direksi)
3. Risk Trend Analysis

### Laporan Kepatuhan
1. Risk Management Self-Assessment
2. Regulatory Report (jika required)

---

## 11. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Risk Framework & Category Setup | 2 minggu |
| **Fase 2** | Risk Register & Assessment | 3 minggu |
| **Fase 3** | Mitigation Tracking | 2 minggu |
| **Fase 4** | KRI Setup & Monitoring | 3 minggu |
| **Fase 5** | Dashboard & Heat Map | 2 minggu |
| **Fase 6** | Integration dengan Modul Lain | 2 minggu |
| **Fase 7** | Reporting & Alert System | 2 minggu |
| **Fase 8** | UAT & Go-live | 2 minggu |
| | **Total** | **18 minggu** |

---

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Low adoption | Tinggi | Training, change management |
| Data quality poor | Sedang | Validation rules, review |
| Integration failure | Sedang | API testing, fallback |
| Alert fatigue | Sedang | Threshold tuning |

---

## 13. Kriteria Sukses (KPI)

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| Risk register coverage | 100% unit | Data completeness |
| Assessment completion | > 90% | Dashboard tracking |
| Mitigation on-time | > 85% | Deadline tracking |
| KRI monitoring active | 100% | System check |
| Alert response time | < 24 jam | Log analysis |

---

## 14. Kesimpulan

Sistem Manajemen Risiko akan:

> [!IMPORTANT]
> - **Mengidentifikasi** risiko secara sistematis dengan kategori terstandar
> - **Menilai** risiko menggunakan matriks likelihood × impact
> - **Memvisualisasikan** risiko dengan heat map
> - **Memonitor** KRI dengan early warning system
> - **Mengintegrasikan** data dari semua modul

Fitur unggulan:
- 🗂️ **Risk Register** - Daftar risiko digital terstruktur dengan kategorisasi
- 📊 **Risk Assessment** - Inherent vs Residual Risk (L × I)
- 🟥 **Heat Map** - Visualisasi matriks risiko 5×5
- 📊 **Monitoring Pengelolaan** - Progress mitigasi per kategori & aging
- 📝 **KRI Monitoring** - Early warning real-time dari semua modul
- 📁 **Arsip Digital** - Repository dokumen & evidence terpusat
- 🔔 **Alert System** - Notifikasi otomatis untuk breach threshold
- 🔗 **Integrated** - Data dari semua modul

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 2.0 | Tanggal: 19 Januari 2026*
*Update: Penambahan Monitoring Pengelolaan MR dan Arsip Digital*
```
