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

### 4.6 Reporting

```
FR-RM-050: Sistem dapat generate laporan risk profile per unit
FR-RM-051: Sistem dapat generate laporan risk register
FR-RM-052: Sistem dapat generate laporan mitigasi progress
FR-RM-053: Sistem dapat export laporan untuk Komisaris/Direksi
FR-RM-054: Sistem dapat generate laporan untuk regulator
```

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
- 🗂️ **Risk Register** - Daftar risiko digital terstruktur
- 📊 **Heat Map** - Visualisasi matriks risiko
- 📈 **KRI Monitoring** - Early warning real-time
- 🔔 **Alert System** - Notifikasi otomatis
- 📋 **Integrated** - Data dari semua modul

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 1.0 | Tanggal: 18 Januari 2026*
