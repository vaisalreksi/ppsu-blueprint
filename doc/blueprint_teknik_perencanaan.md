# 🏗️ Blueprint Modul: Sistem Teknik dan Perencanaan
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

---

## 1. Latar Belakang

### Deskripsi Unit
Divisi Teknik dan Perencanaan bertanggung jawab atas:
- Perencanaan dan desain proyek infrastruktur
- Pelaksanaan dan pengawasan proyek konstruksi
- Monitoring progress dan kualitas pekerjaan
- Penagihan termin proyek (progress billing)

### Kondisi Saat Ini (As-Is)

| Aspek | Kondisi | Risiko/Masalah |
|-------|---------|----------------|
| Monitoring Proyek | Manual site visit | Sulit pantau harian, biaya tinggi |
| Progress Tracking | Laporan mingguan manual | Data tidak real-time, subjektif |
| CCTV | Tidak ada/terpisah | Tidak bisa pantau remote |
| Actual vs Plan | Hitung manual Excel | Tidak akurat, lambat |
| Penagihan | Manual berdasar BA | Proses lama, tidak terintegrasi |
| Dokumen | File terpisah | Sulit tracking versi |

### Dampak Masalah
- ⏱️ Progress report terlambat
- 💸 Penagihan tidak akurat
- 📊 Sulit deteksi deviasi schedule
- ⚠️ Risiko kualitas tidak termonitor

---

## 2. Tujuan Modul

> **Membangun sistem manajemen proyek terintegrasi dengan monitoring CCTV, tracking progress real-time, analisis actual vs plan, dan sistem penagihan otomatis yang terintegrasi ke Keuangan.**

### Sasaran Utama
1. ✅ CCTV monitoring proyek real-time
2. ✅ Tracking progress actual vs baseline plan
3. ✅ Dashboard S-Curve dan variance analysis
4. ✅ Sistem penagihan termin otomatis
5. ✅ Integrasi langsung ke modul Keuangan (AR)

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Direksi | Monitoring & decision | Dashboard proyek, variance report |
| Manajer Teknik | Kelola proyek | Progress tracking, CCTV, laporan |
| Site Supervisor | Eksekusi lapangan | Update progress, dokumentasi |
| QC/Inspector | Quality control | Checklist, foto, CCTV playback |
| Kontraktor | Pelaksana | Update progress, tagihan |
| Keuangan | Penagihan & rekon | Invoice, AR, pembayaran |

---

## 4. Kebutuhan Fungsional

### 4.1 Manajemen Proyek

```
FR-TP-001: Sistem dapat mencatat data proyek (nama, lokasi, nilai, durasi)
FR-TP-002: Sistem dapat mencatat kontrak proyek (nomor, tanggal, nilai)
FR-TP-003: Sistem dapat setup WBS (Work Breakdown Structure)
FR-TP-004: Sistem dapat setup baseline schedule (Gantt Chart)
FR-TP-005: Sistem dapat mencatat milestone proyek
FR-TP-006: Sistem dapat mencatat tim proyek dan vendor
FR-TP-007: Sistem dapat upload dokumen proyek (kontrak, gambar, spek)
```

### 4.2 CCTV Monitoring Proyek

> [!IMPORTANT]
> CCTV terintegrasi untuk pengawasan remote proyek

```
FR-TP-010: Sistem dapat menampilkan live feed CCTV dari site proyek
FR-TP-011: Sistem dapat mencatat lokasi kamera per proyek
FR-TP-012: Sistem dapat playback rekaman CCTV
FR-TP-013: Sistem dapat capture snapshot dengan timestamp
FR-TP-014: Sistem dapat compare foto progress (time-lapse)
FR-TP-015: Sistem mendukung multi-camera view
FR-TP-016: Dashboard menampilkan grid CCTV semua proyek aktif
```

**Konfigurasi CCTV:**
- 📹 IP Camera dengan PTZ control
- 🔄 Recording 24/7
- ☁️ Cloud storage untuk playback
- 📱 Mobile view untuk site supervisor

### 4.3 Progress Tracking (Actual vs Plan)

```
FR-TP-020: Sistem dapat input progress harian/mingguan (%)
FR-TP-021: Sistem dapat compare actual progress vs baseline plan
FR-TP-022: Sistem menghitung variance (SPI - Schedule Performance Index)
FR-TP-023: Sistem menampilkan S-Curve (plan vs actual)
FR-TP-024: Sistem dapat menampilkan early warning jika behind schedule
FR-TP-025: Sistem dapat generate progress photo log
FR-TP-026: Sistem dapat mencatat kendala/issue di lapangan
FR-TP-027: Dashboard menampilkan status semua proyek (on-track, delayed, ahead)
```

**Indikator Status Proyek:**

| Warna | Status | Kondisi |
|-------|--------|---------|
| 🟢 Hijau | On Track | Actual ≥ Plan (SPI ≥ 1.0) |
| 🟡 Kuning | Minor Delay | SPI 0.9 - 0.99 |
| 🟠 Oranye | At Risk | SPI 0.8 - 0.89 |
| 🔴 Merah | Critical | SPI < 0.8 |

### 4.4 Sistem Penagihan Proyek (Progress Billing)

> [!IMPORTANT]
> Penagihan berdasarkan progress aktual dan milestone

```
FR-TP-030: Sistem dapat setup termin penagihan per proyek
FR-TP-031: Sistem menghitung nilai tagihan berdasarkan % progress
FR-TP-032: Sistem dapat generate Berita Acara Progress (BAP)
FR-TP-033: Sistem dapat generate invoice termin
FR-TP-034: Sistem tracking status tagihan (draft, submitted, approved, paid)
FR-TP-035: Sistem dapat mencatat retensi (retention)
FR-TP-036: Sistem dapat menghitung progress claim vs actual work
```

**Termin Penagihan Typical:**

| Termin | Progress | % Nilai | Retensi |
|--------|----------|---------|---------|
| Termin 1 | 0-25% | 20% | 5% |
| Termin 2 | 25-50% | 25% | 5% |
| Termin 3 | 50-75% | 25% | 5% |
| Termin 4 | 75-95% | 20% | 5% |
| Final | 95-100% + Retensi | 10% | Release |

### 4.5 Quality Control

```
FR-TP-040: Sistem dapat membuat checklist quality per work item
FR-TP-041: QC dapat input hasil inspeksi dengan foto
FR-TP-042: Sistem dapat tracking NCR (Non-Conformance Report)
FR-TP-043: Sistem dapat generate quality report
```

---

## 5. Integrasi Real-time dengan Keuangan

> [!IMPORTANT]
> Setiap tagihan termin otomatis tercatat sebagai AR di Keuangan

### 5.1 Dari Teknik → Keuangan

| Event di Teknik | Trigger ke Keuangan |
|-----------------|---------------------|
| BAP Approved | Create AR Invoice |
| Invoice Submitted | Update AR status |
| Pembayaran Diterima | Jurnal Bank → Pendapatan Proyek |
| Release Retensi | Jurnal AR Retensi → Pendapatan |

### 5.2 Struktur Jurnal

```
PENAGIHAN TERMIN:
DEBIT:  1301 - Piutang Proyek          xxx
KREDIT: 4301 - Pendapatan Proyek       xxx (95%)
KREDIT: 2401 - Uang Muka Retensi       xxx (5%)

PEMBAYARAN TERMIN:
DEBIT:  1101 - Bank                    xxx
KREDIT: 1301 - Piutang Proyek          xxx

RELEASE RETENSI:
DEBIT:  1101 - Bank                    xxx
KREDIT: 2401 - Uang Muka Retensi       xxx
```

### 5.3 API Integration Points

```
POST /api/keuangan/ar/proyek           → Create AR dari BAP
POST /api/keuangan/jurnal/termin       → Record pembayaran termin
GET  /api/keuangan/ar/proyek/{id}      → Get AR status per proyek
POST /api/keuangan/retensi/release     → Release retensi
```

---

## 6. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | CCTV Streaming | Latency < 5 detik, 720p min |
| NFR-02 | Storage | Rekaman 30 hari, cloud backup |
| NFR-03 | Mobile | Responsive, offline progress input |
| NFR-04 | Performance | Dashboard load < 3 detik |
| NFR-05 | Security | Role-based access, encrypted stream |
| NFR-06 | Audit | Log semua perubahan progress |

---

## 7. Diagram Proses Bisnis

### 7.1 Alur Monitoring & Penagihan Proyek

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Setup     │───▶│   Execute   │───▶│   Monitor   │───▶│   Report    │
│   Project   │    │   & Track   │    │   CCTV      │    │   Progress  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                               │
                          ┌────────────────────────────────────┘
                          ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Milestone  │◀───│   S-Curve   │◀───│   Actual    │◀───│   Input     │
│  Achieved   │    │   Update    │    │  vs Plan    │    │  Progress   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
      │
      ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Generate   │───▶│   Approval  │───▶│   Invoice   │───▶│   Post to   │
│    BAP      │    │     BAP     │    │   Termin    │    │   KEUANGAN  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### 7.2 S-Curve Analysis

```
Progress (%)
    │
100%├─────────────────────────────────────*─ Target Completion
    │                                   ╱
 75%├─────────────────────────────*────╱── Actual Progress
    │                            ╱   ╱
 50%├────────────────────*──────╱───╱───── Variance Analysis
    │                   ╱      ╱  ╱
 25%├──────────*───────╱──────╱──╱──────── Baseline Plan
    │         ╱       ╱      ╱ ╱
  0%├────*───╱───────╱──────╱─╱───────────
    └────┴───┴───────┴──────┴─┴───────────▶ Time
         M1   M2      M3     M4   M5
    
    ─── Baseline Plan
    ─── Actual Progress
```

---

## 8. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **Project** | id, name, location, contract_value, start_date, end_date, status |
| **Contract** | id, project_id, contract_number, value, signed_date |
| **WBS** | id, project_id, parent_id, name, weight_pct, baseline_pct |
| **ProgressLog** | id, wbs_id, date, actual_pct, notes, photo_url |
| **Milestone** | id, project_id, name, target_date, actual_date, status |
| **CCTVCamera** | id, project_id, name, location, stream_url, status |
| **ProgressBilling** | id, project_id, termin_no, claim_pct, amount, status |
| **BAP** | id, billing_id, bap_number, date, approved_by, status |
| **Invoice** | id, bap_id, invoice_number, amount, due_date, status |
| **QualityCheck** | id, wbs_id, inspector_id, date, result, notes |

---

## 9. Role & Permission Matrix

| Fitur | Supervisor | Manajer | QC | Kontraktor | Keuangan | Direksi |
|-------|:----------:|:-------:|:--:|:----------:|:--------:|:-------:|
| Input Progress | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| View CCTV | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| Approve Progress | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Generate BAP | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Approve BAP | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Generate Invoice | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Quality Check | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Dashboard Analytics | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |

---

## 10. Laporan yang Dibutuhkan

### Laporan Progress
1. Progress Report Mingguan/Bulanan
2. S-Curve Report (Plan vs Actual)
3. Variance Analysis Report
4. Photo Progress Report / Time-lapse

### Laporan Penagihan
1. Billing Schedule per Proyek
2. AR Aging per Proyek
3. Claim vs Actual Progress
4. Retensi Outstanding

### Laporan Quality
1. Quality Inspection Report
2. NCR Log
3. Defect Closure Report

---

## 11. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Master Data (Proyek, WBS, Milestone) | 2 minggu |
| **Fase 2** | Progress Tracking + S-Curve | 4 minggu |
| **Fase 3** | CCTV Integration | 3 minggu |
| **Fase 4** | Progress Billing + BAP | 3 minggu |
| **Fase 5** | Integrasi Keuangan (AR) | 2 minggu |
| **Fase 6** | Quality Module | 2 minggu |
| **Fase 7** | Mobile App + Offline | 2 minggu |
| **Fase 8** | UAT & Go-live | 2 minggu |
| | **Total** | **20 minggu** |

---

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| CCTV offline | Tinggi | 4G backup, local recording |
| Progress tidak akurat | Tinggi | Photo evidence, QC verify |
| Penagihan dispute | Sedang | BAP approval workflow |
| Network issue site | Sedang | Offline mode, sync later |

---

## 13. Kriteria Sukses (KPI)

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| CCTV uptime | > 95% | Monitoring system |
| Progress update frequency | Mingguan | Log data |
| Billing accuracy | 100% match BAP | Audit |
| AR collection | > 90% dalam 30 hari | AR aging |
| Project on-time delivery | > 80% | SPI tracking |

---

## 14. Kesimpulan

Sistem Teknik dan Perencanaan akan:

> [!IMPORTANT]
> - **Memungkinkan** monitoring proyek remote via CCTV
> - **Membandingkan** progress actual vs baseline dengan S-Curve
> - **Mengotomatisasi** penagihan termin berdasarkan progress
> - **Mengintegrasikan** invoice langsung ke Keuangan (AR)

Fitur unggulan:
- 📹 **CCTV Live** - Pantau proyek dari kantor
- 📈 **S-Curve Dashboard** - Visualisasi actual vs plan
- 💰 **Progress Billing** - Tagihan berdasar progress
- 🔗 **AR Integration** - Sync otomatis ke Keuangan

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 1.0 | Tanggal: 18 Januari 2026*
