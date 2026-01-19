# 📊 Blueprint Modul: Dashboard Top Management
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

---

## 1. Latar Belakang

### Deskripsi
Dashboard Top Management adalah modul utama (master dashboard) yang menyajikan ringkasan eksekutif dari seluruh modul operasional PT PPSU. Dashboard ini dirancang khusus untuk Direksi dan Dewan Komisaris dalam mengambil keputusan strategis berdasarkan data real-time dan KPI terkonsolidasi.

### Posisi dalam Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────────┐
│                 📊 DASHBOARD TOP MANAGEMENT                      │
│              (Executive Summary & Decision Support)              │
└─────────────────────────────────────────────────────────────────┘
                            ▲  ▲  ▲
        ┌───────────────────┼──┼──┼────────────────────┐
        │                   │  │  │                    │
┌───────┴───────┐ ┌─────────┴──┴──┴─────────┐ ┌───────┴───────┐
│   KEUANGAN    │ │   OPERASIONAL          │ │  GOVERNANCE   │
│   - Jurnal    │ │   - Transportasi       │ │  - Risiko     │
│   - AR/AP     │ │   - PRSU               │ │  - CACM       │
│   - Cashflow  │ │   - Teknik             │ │  - SPI        │
└───────────────┘ └────────────────────────┘ └───────────────┘
        ▲                   ▲                       ▲
┌───────┴───────┐ ┌─────────┴──────────┐ ┌─────────┴─────────┐
│   SUPPORTING  │ │   HR & ADMIN       │ │    COMPLIANCE     │
│   - Bag Umum  │ │   - Human Capital  │ │    - Kontrak      │
│   - Aset      │ │   - Payroll        │ │    - Legal        │
└───────────────┘ └────────────────────┘ └───────────────────┘
```

### Kondisi Saat Ini (As-Is)

| Aspek | Kondisi | Risiko/Masalah |
|-------|---------|----------------|
| Reporting | Manual dari masing-masing unit | Lambat, tidak real-time |
| Data Source | Terpisah-pisah | Tidak konsisten |
| Visualization | PowerPoint/Excel | Static, outdated |
| Decision Making | Berdasarkan laporan periodik | Terlambat |
| Drill-down | Tidak ada | Sulit analisis detail |

---

## 2. Tujuan Modul

> **Menyediakan single source of truth dengan dashboard interaktif yang menampilkan KPI real-time dari seluruh unit bisnis, early warning alerts, dan kemampuan drill-down untuk mendukung pengambilan keputusan eksekutif.**

### Sasaran Utama
1. ✅ Konsolidasi KPI dari semua modul
2. ✅ Real-time data visualization
3. ✅ Early warning & critical alerts
4. ✅ Drill-down capability ke detail
5. ✅ Mobile-friendly untuk akses Direksi
6. ✅ Customizable dashboard per user

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Direktur Utama | Oversight seluruh bisnis | Summary KPI, critical alerts |
| Direktur Keuangan | Monitoring finansial | Revenue, cashflow, AR aging |
| Direktur Operasional | Monitoring operasional | Project status, utilization |
| Komisaris | Governance | Quarterly summary, compliance |
| Sekretaris Perusahaan | Reporting | Generate executive reports |

---

## 4. Kebutuhan Fungsional

### 4.1 Executive Summary Dashboard

```
FR-DM-001: Dashboard menampilkan summary dari semua modul
FR-DM-002: Dashboard menampilkan trend performansi (MoM, YoY)
FR-DM-003: Dashboard dapat filter by periode (daily/weekly/monthly/yearly)
FR-DM-004: Dashboard dapat compare dengan target/budget
FR-DM-005: Dashboard menampilkan critical alerts consolidated
```

### 4.2 Financial Overview (dari Modul Keuangan)

```
FR-DM-010: Menampilkan total revenue (year-to-date)
FR-DM-011: Menampilkan profit/loss summary
FR-DM-012: Menampilkan cashflow position
FR-DM-013: Menampilkan AR aging summary
FR-DM-014: Menampilkan budget realization
FR-DM-015: Menampilkan revenue breakdown by business unit
```

**KPI Keuangan:**
| KPI | Target | Source |
|-----|--------|--------|
| Total Revenue YTD | Rp 150 M | Modul Keuangan |
| Net Profit Margin | > 15% | Modul Keuangan |
| Current Ratio | > 1.5 | Modul Keuangan |
| AR Collection Rate | > 90% | Modul Keuangan |
| Budget Realization | > 85% | Modul Keuangan |

### 4.2.1 Saldo Bank & Giro (Real-time)

> [!IMPORTANT]
> Direksi dapat melihat posisi kas dan bank kapan saja untuk keputusan likuiditas

```
FR-DM-016: Menampilkan saldo kas per rekening real-time
FR-DM-017: Menampilkan saldo bank per rekening
FR-DM-018: Menampilkan total cash position
FR-DM-019: Menampilkan trend cashflow 7 hari terakhir
```

**Contoh Tampilan Saldo:**

| Rekening | Bank | Saldo | Status |
|----------|------|-------|--------|
| 123-456-789 | Bank Mandiri | Rp 12.500.000.000 | ✅ |
| 987-654-321 | Bank BNI | Rp 8.750.000.000 | ✅ |
| 111-222-333 | Bank BRI | Rp 3.200.000.000 | ✅ |
| **Total Cash** | | **Rp 24.450.000.000** | |

### 4.2.2 Budget vs Aktual (Early Warning)

> [!WARNING]
> Sistem memberikan early warning jika realisasi mendekati atau melampaui anggaran

```
FR-DM-020: Menampilkan budget vs actual per unit
FR-DM-021: Early warning indicator (80%, 90%, 100%)
FR-DM-022: Drill-down ke detail per akun
FR-DM-023: Trend realisasi bulanan
```

**Early Warning Indicator:**

| % Realisasi | Warna | Status | Aksi |
|-------------|:-----:|--------|------|
| < 80% | 🟢 | Normal | - |
| 80-90% | 🟡 | Warning | Notifikasi Manajer |
| 90-100% | 🟠 | Alert | Notifikasi Direktur |
| > 100% | 🔴 | Over Budget | Eskalasi Dirut |

**Contoh Dashboard Budget:**

| Unit | Budget | Actual | % | Status |
|------|--------|--------|---|--------|
| Transportasi | Rp 25 M | Rp 21 M | 84% | 🟡 |
| PRSU | Rp 15 M | Rp 11 M | 73% | 🟢 |
| Teknik | Rp 40 M | Rp 38 M | 95% | 🟠 |
| HC | Rp 20 M | Rp 18 M | 90% | 🟠 |

### 4.3 Operational Overview

#### 4.3.1 Transportasi (dari Modul Transportasi)
```
FR-DM-020: Menampilkan jumlah penumpang (daily/monthly)
FR-DM-021: Menampilkan revenue tiket
FR-DM-022: Menampilkan utilization rate armada
FR-DM-023: Menampilkan status CCTV & GPS
```

**KPI Transportasi:**
| KPI | Target | Source |
|-----|--------|--------|
| Daily Passengers | > 2,000 | Modul Transportasi |
| Fleet Utilization | > 80% | Modul Transportasi |
| On-time Departure | > 95% | Modul Transportasi |
| Revenue per Trip | Rp 45 jt | Modul Transportasi |

#### 4.3.2 PRSU (dari Modul PRSU)
```
FR-DM-025: Menampilkan jumlah event bulanan
FR-DM-026: Menampilkan occupancy rate venue
FR-DM-027: Menampilkan revenue booking
FR-DM-028: Menampilkan pending approvals
```

**KPI PRSU:**
| KPI | Target | Source |
|-----|--------|--------|
| Monthly Events | > 15 | Modul PRSU |
| Occupancy Rate | > 65% | Modul PRSU |
| Revenue per Event | Rp 85 jt avg | Modul PRSU |
| Approval SLA | < 24 jam | Modul PRSU |

#### 4.3.3 Proyek Infrastruktur (dari Modul Teknik)
```
FR-DM-030: Menampilkan status semua proyek aktif
FR-DM-031: Menampilkan total nilai kontrak
FR-DM-032: Menampilkan average SPI
FR-DM-033: Menampilkan project at risk
FR-DM-034: Menampilkan billing collection status
```

**KPI Proyek:**
| KPI | Target | Source |
|-----|--------|--------|
| Projects On Track | > 80% | Modul Teknik |
| Average SPI | > 0.95 | Modul Teknik |
| Cost Variance | < 5% | Modul Teknik |
| Billing Collection | > 90% | Modul Teknik |

### 4.4 Human Capital Overview (dari Modul HC)

```
FR-DM-040: Menampilkan total karyawan
FR-DM-041: Menampilkan attendance rate
FR-DM-042: Menampilkan turnover rate
FR-DM-043: Menampilkan payroll status
```

**KPI Human Capital:**
| KPI | Target | Source |
|-----|--------|--------|
| Headcount | 250 | Modul HC |
| Attendance Rate | > 95% | Modul HC |
| Turnover Rate | < 5% | Modul HC |
| Training Hours | > 40 jam/tahun | Modul HC |

### 4.5 Risk & Compliance Overview

```
FR-DM-050: Menampilkan risk heat map summary
FR-DM-051: Menampilkan high/extreme risks count
FR-DM-052: Menampilkan KRI breach summary
FR-DM-053: Menampilkan open audit findings
FR-DM-054: Menampilkan compliance score
```

**KPI Risiko & Compliance:**
| KPI | Target | Source |
|-----|--------|--------|
| Extreme Risks | 0 | Modul Risiko |
| High Risks | < 5 | Modul Risiko |
| KRI Green | > 90% | Modul Risiko |
| Open Findings | < 10 | Modul CACM |
| Finding Closure Rate | > 85% | Modul CACM |

### 4.6 Alert & Notification Center

```
FR-DM-060: Consolidate alerts dari semua modul
FR-DM-061: Kategorisasi alert (critical/warning/info)
FR-DM-062: Filter alert by modul
FR-DM-063: Mark alert as read/acknowledged
FR-DM-064: Drill-down ke source alert
```

**Alert Priority:**
| Priority | Source Examples |
|----------|-----------------|
| 🔴 Critical | Extreme risk, CACM critical, overcapacity |
| 🟠 Warning | High risk, KRI breach, project delay |
| 🟡 Info | Medium risk, pending approval |

### 4.7 Custom Dashboard & Reporting

```
FR-DM-070: User dapat customize widgets di dashboard
FR-DM-071: Dapat save dashboard layout preference
FR-DM-072: Generate PDF/PPT executive report
FR-DM-073: Schedule automated report delivery
FR-DM-074: Export data untuk analysis
```

### 4.8 Approval Center (Otorisasi)

> [!IMPORTANT]
> Direksi dapat melakukan approval langsung dari dashboard tanpa masuk ke masing-masing modul

```
FR-DM-080: Menampilkan daftar pending approval dari semua modul
FR-DM-081: Filter approval by modul/kategori
FR-DM-082: Quick approve/reject dengan komentar
FR-DM-083: View detail sebelum approve
FR-DM-084: Batch approval untuk item sejenis
FR-DM-085: Notifikasi jika approval aging > SLA
FR-DM-086: Audit trail semua keputusan approval
```

**Kategori Approval:**

| Modul | Jenis Approval | SLA |
|-------|----------------|-----|
| Keuangan | Jurnal > Rp 100 jt | 4 jam |
| Keuangan | Payment voucher | 4 jam |
| HC | Payroll run | 24 jam |
| PRSU | Event booking | 24 jam |
| Teknik | Termin pembayaran | 8 jam |
| Bagian Umum | PO > Rp 50 jt | 8 jam |

**Contoh Pending Approval:**

| No | Modul | Jenis | Nilai | Requested | Aging | Action |
|----|-------|-------|-------|-----------|-------|--------|
| 1 | Keuangan | Payment | Rp 125 jt | 08:30 | ⚠️ 3 jam | ✅❌ |
| 2 | PRSU | Booking | Rp 85 jt | 14:00 | 🟢 1 jam | ✅❌ |
| 3 | Teknik | Termin | Rp 450 jt | Yesterday | 🔴 25 jam | ✅❌ |

---

## 5. Data Sources & Integration

> [!IMPORTANT]
> Dashboard mengambil data real-time dari semua modul via API

### 5.1 API Endpoints per Modul

| Modul | Endpoint | Data |
|-------|----------|------|
| Keuangan | `/api/keuangan/summary` | Revenue, P&L, Cashflow, AR |
| Transportasi | `/api/transportasi/summary` | Passengers, Revenue, Utilization |
| PRSU | `/api/prsu/summary` | Events, Occupancy, Revenue |
| Teknik | `/api/teknik/summary` | Projects, SPI, Billing |
| HC | `/api/hc/summary` | Headcount, Attendance, Turnover |
| Risiko | `/api/risiko/summary` | Heat map, KRI, Alerts |
| CACM | `/api/cacm/summary` | Exceptions, Findings |
| Bag Umum | `/api/bagum/summary` | Assets, Vehicles |
| Sekretariat | `/api/sekret/summary` | Documents, Contracts |

### 5.2 Data Refresh Rate

| Data Type | Refresh Rate |
|-----------|--------------|
| Financial Summary | Every 15 minutes |
| Operational Metrics | Real-time (5 min) |
| Risk & KRI | Real-time (15 min) |
| Alerts | Real-time (push) |
| Historical Trends | Hourly |

---

## 6. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | Performance | Dashboard load < 3 detik |
| NFR-02 | Availability | 99.9% uptime |
| NFR-03 | Mobile | Full responsive design |
| NFR-04 | Real-time | Max 5 menit data delay |
| NFR-05 | Security | Role-based, encrypted |
| NFR-06 | Accessibility | Accessible dari anywhere |

---

## 7. Dashboard Layout Design

### 7.1 Main Dashboard Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER: Logo │ Welcome, Direktur │ Alerts (5) │ Settings     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │  💰 REVENUE     │ │  📈 NET PROFIT  │ │  💵 CASHFLOW    │   │
│  │  Rp 125.5 M     │ │  18.5%          │ │  Rp 45.2 M      │   │
│  │  ▲ 12% vs LY    │ │  ▲ 2.3% vs LY   │ │  ✅ Healthy     │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────┐ ┌────────────────────────┐│
│  │  📊 REVENUE BY BUSINESS UNIT    │ │  ⚠️ CRITICAL ALERTS   ││
│  │  ┌─────────────────────────┐    │ │  🔴 2 Extreme Risks    ││
│  │  │ ████████ Transport 45%  │    │ │  🔴 1 CACM Critical    ││
│  │  │ ██████   PRSU 30%       │    │ │  🟠 3 High Risks       ││
│  │  │ █████    Proyek 25%     │    │ │  🟡 5 Pending Approval ││
│  │  └─────────────────────────┘    │ │                        ││
│  └─────────────────────────────────┘ └────────────────────────┘│
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  📈 PERFORMANCE TREND (6 MONTHS)                            ││
│  │  [Revenue ─── Profit ─── Target ...]                        ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌─────────────────────────────────┐ ┌────────────────────────┐│
│  │  🏗️ PROJECT STATUS             │ │  🗺️ RISK HEAT MAP     ││
│  │  ✅ 5 On Track                  │ │  [5x5 Matrix Mini]      ││
│  │  🟡 2 At Risk                   │ │  Extreme: 2             ││
│  │  🔴 1 Critical                  │ │  High: 5                ││
│  └─────────────────────────────────┘ └────────────────────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **DashboardConfig** | id, user_id, layout_json, created_at |
| **Widget** | id, name, type, data_source, refresh_rate |
| **UserWidget** | id, user_id, widget_id, position, size |
| **Alert** | id, source_module, type, severity, message, read_at |
| **ReportSchedule** | id, user_id, report_type, schedule, recipients |
| **AuditAccess** | id, user_id, dashboard_section, timestamp |

---

## 9. Role & Permission Matrix

| Fitur | Direktur | Komisaris | Manajer | Staff |
|-------|:--------:|:---------:|:-------:|:-----:|
| View All KPIs | ✅ | ✅ | ❌ | ❌ |
| View Unit KPIs | ✅ | ✅ | ✅ | ❌ |
| Drill-down Detail | ✅ | ✅ | ✅ | ❌ |
| Custom Dashboard | ✅ | ✅ | ✅ | ❌ |
| Generate Report | ✅ | ✅ | ✅ | ❌ |
| View Alerts | ✅ | ✅ | ✅* | ❌ |
| Configure Widgets | ✅ | ✅ | ❌ | ❌ |

*Manajer hanya alert terkait unit mereka

---

## 10. Laporan yang Dibutuhkan

### Laporan Eksekutif
1. **Executive Summary Report** - PDF ringkasan mingguan/bulanan
2. **Board Report** - Laporan untuk Komisaris (quarterly)
3. **Performance Scorecard** - KPI vs Target
4. **Trend Analysis Report** - YoY comparison

### Dashboard Views
1. **Financial View** - Fokus keuangan
2. **Operational View** - Fokus operasional
3. **Risk & Compliance View** - Fokus risiko
4. **HR View** - Fokus SDM

---

## 11. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Dashboard Framework & Layout | 2 minggu |
| **Fase 2** | Financial Module Integration | 2 minggu |
| **Fase 3** | Operational Module Integration | 3 minggu |
| **Fase 4** | Risk & CACM Integration | 2 minggu |
| **Fase 5** | Alert Center | 2 minggu |
| **Fase 6** | Custom Dashboard & Widgets | 2 minggu |
| **Fase 7** | Reporting & Export | 2 minggu |
| **Fase 8** | Mobile Optimization | 2 minggu |
| **Fase 9** | UAT & Go-live | 2 minggu |
| | **Total** | **19 minggu** |

---

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| API integration failure | Tinggi | Fallback data, caching |
| Data inconsistency | Tinggi | Data validation, reconciliation |
| Performance issues | Tinggi | Caching, lazy loading |
| Information overload | Sedang | Smart default, customization |

---

## 13. Kriteria Sukses (KPI)

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| Dashboard adoption | 100% executives | Usage log |
| Data freshness | < 5 menit | Timestamp check |
| Report generation | < 30 detik | Performance log |
| User satisfaction | > 4.5/5 | Survey |
| Decision support | Measurable improvement | Feedback |

---

## 14. Kesimpulan

Dashboard Top Management akan:

> [!IMPORTANT]
> - **Mengkonsolidasikan** KPI dari seluruh 9 modul operasional
> - **Menyediakan** single source of truth untuk executives
> - **Memvisualisasikan** data real-time dengan drill-down
> - **Memperingatkan** melalui consolidated alert center
> - **Mendukung** pengambilan keputusan strategis

Fitur unggulan:
- 📊 **Consolidated KPIs** - Semua metric dalam satu view
- 💰 **Kinerja Keuangan** - Revenue, Profit, Cashflow real-time
- 🏢 **Kinerja Unit Bisnis** - Transportasi, PRSU, Teknik, HC
- 📈 **Budget vs Aktual** - Early warning 80%/90%/100%
- ⚠️ **Risiko & Temuan Audit** - Heat map, CACM summary
- 🏦 **Saldo Bank & Giro** - Posisi kas real-time
- ✅ **Approval Center** - Otorisasi dari dashboard
- 🔔 **Alert Center** - Konsolidasi dari semua modul

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 2.0 | Tanggal: 19 Januari 2026*
*Update: Penambahan Saldo Bank/Giro, Budget Early Warning, dan Approval Center*
