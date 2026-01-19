# 👥 Blueprint Modul: Sistem Human Capital
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

> [!IMPORTANT]
> **PRIORITAS: URGENT** - Diperlukan untuk pengelolaan SDM dan penggajian yang terintegrasi

---

## 1. Latar Belakang

### Ruang Lingkup Human Capital
Sistem Human Capital mengelola seluruh siklus hidup karyawan:
- Data kepegawaian
- Presensi & kehadiran
- Penggajian (payroll)
- Cuti & izin
- Penilaian kinerja
- Pelatihan & pengembangan

### Kondisi Saat Ini (As-Is)

| Aspek | Kondisi | Risiko |
|-------|---------|--------|
| Data Karyawan | Excel/paper-based | Data tidak terupdate, duplikasi |
| Presensi | Manual/mesin absen standalone | Sulit rekapitulasi |
| Penggajian | Hitung manual Excel | Error, lambat, tidak konsisten |
| PPh 21 | Hitung terpisah | Risiko kesalahan pajak |
| Cuti | Tracking manual | Saldo cuti tidak akurat |

### Dampak Masalah
- ⏱️ Proses payroll lama (5-7 hari/bulan)
- 💸 Risiko salah hitung gaji & pajak
- 📉 Data karyawan tidak akurat
- ❌ Tidak ada histori lengkap untuk audit

---

## 2. Tujuan Modul

> **Membangun sistem pengelolaan SDM terintegrasi dengan payroll otomatis, perhitungan PPh 21 sesuai regulasi, dan integrasi langsung ke modul Keuangan.**

### Sasaran Utama
1. ✅ Database karyawan terpusat dengan histori lengkap
2. ✅ Presensi terintegrasi dengan payroll
3. ✅ Penggajian otomatis dengan perhitungan PPh 21
4. ✅ Manajemen cuti dengan saldo real-time
5. ✅ Integrasi jurnal gaji ke Keuangan

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Direksi | Approval & monitoring | Dashboard HC, biaya SDM |
| Manajer HC | Kelola operasional | Data karyawan, payroll, laporan |
| Staff HC | Input & verifikasi | Entry data, presensi |
| Karyawan | User | Slip gaji, pengajuan cuti |
| Keuangan | Integrasi | Jurnal gaji, PPh 21 |
| Auditor | Pengawasan | Audit trail, laporan |

---

## 4. Kebutuhan Fungsional

### 4.1 Data Kepegawaian

```
FR-HC-001: Sistem dapat mencatat data karyawan lengkap (biodata, kontak, keluarga)
FR-HC-002: Sistem dapat mencatat data kepegawaian (NIK, tanggal masuk, jabatan, unit)
FR-HC-003: Sistem dapat mencatat histori mutasi/promosi
FR-HC-004: Sistem dapat mencatat status karyawan (aktif, cuti, resign, pensiun)
FR-HC-005: Sistem dapat menyimpan dokumen karyawan (KTP, NPWP, kontrak)
FR-HC-006: Sistem dapat generate nomor induk karyawan otomatis
FR-HC-007: Sistem dapat mencatat kontrak kepegawaian (PKWT/PKWTT)
FR-HC-008: Sistem dapat tracking masa berlaku kontrak dengan reminder
```

**Data Induk Pegawai:**

| Kategori | Data | Keterangan |
|----------|------|------------|
| Biodata | Nama, Tempat/Tgl Lahir, Alamat, KTP, NPWP | Data dasar |
| Kepegawaian | NIK, Tgl Masuk, Jabatan, Unit, Grade | Status kerja |
| Keluarga | Pasangan, Anak, Status PTKP | Untuk pajak |
| Kontrak | Jenis (PKWT/PKWTT), Periode, Status | Masa kerja |
| Dokumen | Ijazah, Sertifikat, SK Pengangkatan | Arsip digital |

**Kontrak Kepegawaian:**

| Jenis Kontrak | Keterangan | Masa Berlaku |
|---------------|------------|-------------|
| PKWTT | Pegawai Tetap | Tidak terbatas |
| PKWT | Pegawai Kontrak | Maks 2 tahun + 1x perpanjangan |
| Probation | Masa Percobaan | 3 bulan |
| Outsource | Pihak ketiga | Sesuai kontrak vendor |

### 4.2 Presensi & Kehadiran

```
FR-HC-010: Sistem dapat mencatat kehadiran harian (clock in/out)
FR-HC-011: Sistem dapat integrasi dengan mesin absensi
FR-HC-012: Sistem dapat mencatat lembur dengan approval
FR-HC-013: Sistem dapat mencatat dinas luar
FR-HC-014: Sistem dapat generate rekapitulasi kehadiran bulanan
FR-HC-015: Sistem dapat menghitung keterlambatan & pulang awal
```

### 4.3 Penggajian (Payroll)

```
FR-HC-020: Sistem dapat setup komponen gaji (gaji pokok, tunjangan, potongan)
FR-HC-021: Sistem dapat menghitung gaji berdasarkan kehadiran
FR-HC-022: Sistem dapat menghitung lembur sesuai regulasi
FR-HC-023: Sistem dapat menghitung potongan (BPJS, pinjaman, dll)
FR-HC-024: Sistem dapat generate slip gaji digital
FR-HC-025: Sistem dapat melakukan payroll run bulanan
FR-HC-026: Sistem dapat export data untuk transfer bank
```

### 4.4 Perhitungan PPh 21

```
FR-HC-030: Sistem dapat menghitung PPh 21 sesuai tarif progresif
FR-HC-031: Sistem mendukung PTKP sesuai status (TK/K0/K1/K2/K3)
FR-HC-032: Sistem dapat menghitung pajak THR & bonus
FR-HC-033: Sistem dapat generate bukti potong 1721-A1
FR-HC-034: Sistem dapat export data untuk e-SPT
FR-HC-035: Sistem dapat menghitung PPh 21 metode gross/gross-up/nett
```

### 4.5 Cuti & Izin

```
FR-HC-040: Sistem dapat mencatat jenis cuti (tahunan, sakit, melahirkan, dll)
FR-HC-041: Sistem dapat mengelola saldo cuti per karyawan
FR-HC-042: Sistem dapat mengajukan cuti online dengan approval workflow
FR-HC-043: Sistem dapat auto-deduct saldo cuti setelah approve
FR-HC-044: Sistem dapat tracking izin dengan bukti/attachment
FR-HC-045: Sistem dapat carry forward saldo cuti (jika kebijakan)
```

### 4.6 Penilaian Kinerja (KPI)

```
FR-HC-050: Sistem dapat setup indikator kinerja per jabatan
FR-HC-051: Sistem dapat input nilai kinerja periodik
FR-HC-052: Sistem dapat menghitung score kinerja
FR-HC-053: Sistem menyediakan dashboard kinerja karyawan
FR-HC-054: Sistem dapat set target individual dengan bobot
FR-HC-055: Sistem dapat compare target vs realisasi
```

**Contoh KPI:**

| Perspektif | KPI | Target | Bobot |
|------------|-----|--------|-------|
| Financial | Penghematan biaya | 10% | 20% |
| Customer | Kepuasan pelanggan | ≥ 4.0/5.0 | 25% |
| Process | SLA compliance | ≥ 95% | 30% |
| Learning | Training hours | ≥ 40 jam/tahun | 25% |

### 4.7 Pengembangan SDM (Merit System)

> [!IMPORTANT]
> Merit system menghubungkan kinerja dengan reward dan pengembangan karir

```
FR-HC-060: Sistem dapat mencatat rencana pelatihan (TNA)
FR-HC-061: Sistem dapat tracking pelaksanaan training dan evaluasi
FR-HC-062: Sistem dapat mencatat sertifikasi dengan masa berlaku
FR-HC-063: Sistem dapat reminder renewal sertifikasi
FR-HC-064: Sistem dapat mencatat career path dan jalur promosi
FR-HC-065: Sistem dapat link KPI dengan bonus/reward
FR-HC-066: Sistem dapat generate laporan pengembangan SDM
```

**Komponen Merit System:**

| Komponen | Deskripsi | Link ke |
|----------|-----------|--------|
| 🎓 **Training** | Jadwal, peserta, materi, evaluasi | KPI Learning |
| 📜 **Sertifikasi** | Jenis, masa berlaku, renewal | Kompetensi |
| 📈 **Career Path** | Jalur karir, promosi, rotasi | Histori Jabatan |
| 🏆 **Reward** | Bonus, penghargaan | KPI Score |

**Tracking Sertifikasi:**

| Sertifikasi | Pemegang | Expired | Status |
|-------------|----------|---------|--------|
| PMP | Budi Santoso | 15 Mar 2027 | ✅ Active |
| ISO 9001 Lead Auditor | Ani Wijaya | 20 Jan 2026 | ⚠️ Expiring Soon |
| Ahli K3 Umum | Dedi Prasetyo | 10 Des 2025 | 🔴 Expired |

**Training Log:**

| Training | Peserta | Tanggal | Durasi | Evaluasi |
|----------|---------|---------|--------|----------|
| Leadership 101 | 15 orang | 10-12 Jan 2026 | 24 jam | 4.2/5.0 |
| MS Excel Advanced | 20 orang | 15 Jan 2026 | 8 jam | 4.5/5.0 |

### 4.8 Monitoring Disiplin & Sanksi

> [!WARNING]
> Pelanggaran disiplin harus didokumentasikan dan diproses sesuai prosedur

```
FR-HC-070: Sistem dapat mencatat pelanggaran disiplin
FR-HC-071: Sistem dapat mengkategorikan tingkat pelanggaran (Ringan/Sedang/Berat)
FR-HC-072: Sistem dapat mencatat sanksi (SP1/SP2/SP3/PHK)
FR-HC-073: Sistem dapat tracking timeline pembinaan
FR-HC-074: Sistem dapat upload bukti pelanggaran
FR-HC-075: Sistem menyimpan histori disiplin per karyawan
FR-HC-076: Sistem dapat link disiplin ke KPI dan kontrak
```

**Tingkat Pelanggaran:**

| Tingkat | Contoh | Sanksi |
|---------|--------|---------|
| 🟡 Ringan | Terlambat < 3x/bulan | Teguran Lisan |
| 🟠 Sedang | Absen tanpa izin 1-3 hari | SP1 |
| 🔴 Berat | Absen tanpa izin > 5 hari | SP2/SP3 |
| ⚫ Sangat Berat | Fraud, kekerasan | PHK |

**Timeline Sanksi:**

| Tahap | Sanksi | Masa Berlaku | Konsekuensi |
|-------|--------|--------------|-------------|
| 1 | Surat Peringatan 1 (SP1) | 6 bulan | Warning |
| 2 | Surat Peringatan 2 (SP2) | 6 bulan | Tidak ada kenaikan gaji |
| 3 | Surat Peringatan 3 (SP3) | 6 bulan | Potensi PHK |
| 4 | PHK | - | Pemutusan hubungan kerja |

**Contoh Record Disiplin:**

| Tanggal | Karyawan | Pelanggaran | Sanksi | Status |
|---------|----------|-------------|--------|--------|
| 15 Jan 2026 | EMP-001 | Terlambat 5x | SP1 | Active |
| 10 Jan 2026 | EMP-025 | Absen tanpa izin 2 hari | SP1 | Active |
| 05 Jan 2026 | EMP-012 | Cekcok dengan rekan | Teguran | Closed |

---

## 5. Import Data dari Sistem Existing

> [!IMPORTANT]
> Data karyawan existing perlu dimigrasi ke sistem baru

### 5.1 Data yang Dapat Diimpor

| Data | Sumber | Format | Prioritas |
|------|--------|--------|-----------|
| Master Karyawan | Excel HR | CSV/Excel | Tinggi |
| Data Jabatan & Unit | Struktur organisasi | CSV | Tinggi |
| Histori Gaji | Arsip payroll | CSV/Excel | Tinggi |
| Saldo Cuti | Rekap cuti | CSV | Tinggi |
| Data BPJS | File BPJS | CSV | Tinggi |
| Histori PPh 21 | Bukti potong | CSV | Sedang |

### 5.2 Fitur Import

```
FR-IMP-001: Sistem menyediakan template import untuk setiap jenis data
FR-IMP-002: Sistem dapat validasi format & isi data sebelum import
FR-IMP-003: Sistem menampilkan preview data sebelum commit
FR-IMP-004: Sistem mencatat log import (tanggal, user, jumlah record)
FR-IMP-005: Sistem dapat rollback import jika terjadi error
FR-IMP-006: Sistem dapat auto-generate NIK jika kosong
FR-IMP-007: Sistem dapat mapping field dari format lama ke format baru
```

### 5.3 Proses Migrasi Data

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Export    │───▶│   Mapping   │───▶│  Validasi   │───▶│   Import    │
│ Excel/Legacy│    │   Field     │    │   Data      │    │   Sistem    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
      │                  │                  │                  │
      ▼                  ▼                  ▼                  ▼
  Collect data      Cleanup &         Cek NIK unik,      Commit &
  karyawan          standardize       NPWP valid         sync status
```

### 5.4 Validasi Import

| Validasi | Deskripsi |
|----------|-----------|
| NIK | Nomor induk karyawan unik |
| NPWP | Format valid 15/16 digit |
| BPJS | Nomor valid |
| Tanggal | Format tanggal konsisten |
| Status | Status karyawan valid |

---

## 6. Integrasi Real-time dengan Keuangan

> [!IMPORTANT]
> Integrasi krusial untuk posting jurnal gaji otomatis

### 6.1 Dari Human Capital → Keuangan

| Event di HC | Trigger ke Keuangan |
|-------------|---------------------|
| Payroll Run Complete | Generate jurnal gaji (debit beban, kredit hutang) |
| Payment Gaji | Jurnal pembayaran gaji |
| Setoran PPh 21 | Jurnal pembayaran pajak |
| BPJS Payment | Jurnal pembayaran BPJS |

### 6.2 Struktur Jurnal Gaji

```
DEBIT:
  5101 - Beban Gaji Pokok           xxx
  5102 - Beban Tunjangan            xxx
  5103 - Beban Lembur               xxx
  5104 - Beban BPJS Perusahaan      xxx

KREDIT:
  2101 - Hutang Gaji                xxx
  2102 - Hutang PPh 21              xxx
  2103 - Hutang BPJS Karyawan       xxx
  2104 - Hutang Pinjaman Karyawan   xxx
```

### 6.3 Dari Keuangan → Human Capital

| Event di Keuangan | Trigger ke HC |
|-------------------|---------------|
| Payment Gaji Completed | Update status slip = Paid |
| Budget HC Approved | Enable payroll run |

### 6.4 API Integration Points

```
POST /api/keuangan/jurnal/payroll   → Generate jurnal gaji
POST /api/keuangan/jurnal/pph21     → Generate jurnal PPh 21
GET  /api/keuangan/budget/hc        → Check budget SDM
PUT  /api/hc/payroll/{id}/paid      → Update status pembayaran
```

---

## 7. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | Security | Data karyawan encrypted, role-based access |
| NFR-02 | Privacy | Comply dengan regulasi data pribadi |
| NFR-03 | Performance | Payroll run < 30 menit untuk 500 karyawan |
| NFR-04 | Audit | Log semua perubahan data & approval |
| NFR-05 | Integration | API ke mesin absen, Keuangan |
| NFR-06 | Mobile | Self-service karyawan (slip gaji, cuti) |

---

## 8. Diagram Proses Bisnis

### 8.1 Siklus Payroll Bulanan

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Cut-off   │───▶│   Rekap     │───▶│  Hitung     │───▶│  Generate   │
│  Presensi   │    │  Kehadiran  │    │  Gaji+PPh   │    │  Slip Gaji  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                               │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│   Update    │◀───│   Jurnal    │◀───│  Approval   │◀─────────┘
│   Status    │    │   Keuangan  │    │   Payroll   │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 8.2 Alur Pengajuan Cuti

```
Karyawan ──▶ Input Cuti ──▶ Atasan Review ──▶ Approved? ──Yes──▶ Deduct Saldo
                                    │
                                    No
                                    │
                                    ▼
                                 Rejected
```

---

## 9. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **Employee** | nik, nama, tanggal_lahir, alamat, npwp, status_pajak, status_kerja |
| **EmployeeJob** | id, employee_id, jabatan, unit, tanggal_mulai, gaji_pokok |
| **Attendance** | id, employee_id, tanggal, clock_in, clock_out, status |
| **Overtime** | id, employee_id, tanggal, jam_mulai, jam_selesai, approved_by |
| **Leave** | id, employee_id, jenis, tanggal_mulai, tanggal_selesai, status |
| **LeaveBalance** | id, employee_id, tahun, jenis_cuti, saldo, terpakai |
| **SalaryComponent** | id, kode, nama, jenis (earning/deduction), formula |
| **Payroll** | id, periode, tanggal_run, status, created_by |
| **PayrollDetail** | id, payroll_id, employee_id, gaji_pokok, tunjangan, potongan, pph21, take_home_pay |
| **PPh21** | id, employee_id, tahun, bulan, penghasilan_bruto, ptkp, pkp, pph_terutang |

---

## 10. Integrasi dengan Modul Lain

| Modul | Jenis Integrasi | Data Flow |
|-------|-----------------|-----------|
| **Keuangan** | Payroll → Jurnal | Auto-generate jurnal gaji |
| **Keuangan** | PPh 21 → Hutang Pajak | Posting hutang PPh |
| **Dashboard** | KPI SDM | Headcount, biaya SDM, turnover |
| **CACM** | Audit Trail | Log transaksi payroll |

---

## 11. Role & Permission Matrix

| Fitur | Staff HC | Manajer HC | Atasan | Karyawan | Keuangan |
|-------|:--------:|:----------:|:------:|:--------:|:--------:|
| Input Karyawan | ✅ | ✅ | ❌ | ❌ | ❌ |
| Edit Gaji | ❌ | ✅ | ❌ | ❌ | ❌ |
| Run Payroll | ❌ | ✅ | ❌ | ❌ | ❌ |
| Approve Payroll | ❌ | ❌ | ❌ | ❌ | ✅ |
| Approve Cuti | ❌ | ❌ | ✅ | ❌ | ❌ |
| Lihat Slip Gaji | ✅ | ✅ | ❌ | ✅ (sendiri) | ❌ |
| Lihat Laporan | ✅ | ✅ | ❌ | ❌ | ✅ |

---

## 12. Laporan yang Dibutuhkan

### Laporan Kepegawaian
1. Daftar Karyawan per Unit/Jabatan
2. Histori Mutasi/Promosi
3. Laporan Turnover
4. Laporan Masa Kerja

### Laporan Payroll
1. Slip Gaji per Karyawan
2. Rekapitulasi Gaji per Unit
3. Laporan Lembur
4. Laporan Potongan

### Laporan Pajak
1. Bukti Potong PPh 21 (1721-A1)
2. Laporan PPh 21 Bulanan
3. SPT Masa PPh 21

### Laporan Kehadiran
1. Rekap Kehadiran Bulanan
2. Laporan Keterlambatan
3. Laporan Cuti & Izin

---

## 13. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Master Karyawan & Import Data | 3 minggu |
| **Fase 2** | Presensi & Integrasi Mesin Absen | 2 minggu |
| **Fase 3** | Setup Komponen Gaji | 2 minggu |
| **Fase 4** | Payroll Engine + PPh 21 | 4 minggu |
| **Fase 5** | Manajemen Cuti | 2 minggu |
| **Fase 6** | Integrasi Keuangan | 2 minggu |
| **Fase 7** | Self-service Karyawan | 2 minggu |
| **Fase 8** | UAT & Go-live | 2 minggu |
| | **Total** | **19 minggu** |

---

## 14. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Salah hitung pajak | Tinggi | Formula review, unit test |
| Data migration gagal | Tinggi | Dry run, parallel payroll 1 bulan |
| User resistance | Sedang | Training, user manual |
| Integrasi absen gagal | Sedang | Manual input backup |

---

## 15. Kriteria Sukses (KPI)

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| Accuracy payroll | 100% | Audit vs manual calculation |
| Payroll processing time | < 1 hari | Waktu dari cut-off ke slip |
| Employee data accuracy | > 99% | Data audit |
| Self-service adoption | > 80% | Login karyawan aktif |
| PPh 21 accuracy | 100% | Review vs SPT |

---

## 16. Kesimpulan

Sistem Human Capital merupakan modul **mission-critical** yang akan:

> [!IMPORTANT]
> - **Mengotomatisasi** penggajian dengan perhitungan PPh 21 sesuai regulasi
> - **Mengintegrasikan** data kepegawaian, presensi, dan payroll
> - **Menghubungkan** langsung ke modul Keuangan untuk jurnal otomatis
> - **Menyediakan** self-service untuk karyawan (slip gaji, cuti)

Fitur **Import Data** memastikan:
- Kontinuitas data karyawan existing
- Histori gaji & pajak tetap terjaga
- Transisi smooth tanpa gangguan operasional

Integrasi **Keuangan** menjamin:
- Jurnal gaji auto-generated
- Rekonsiliasi otomatis
- Closing bulanan lebih cepat

Fitur unggulan:
- 💼 **Data Induk Pegawai** - Master karyawan lengkap dengan kontrak
- 📋 **Presensi & Cuti** - Kehadiran, lembur, approval workflow
- 💰 **Payroll & PPh 21** - Perhitungan otomatis sesuai regulasi
- 🎯 **KPI Karyawan** - Target, realisasi, score
- 🎓 **Merit System** - Training, sertifikasi, career path
- ⚠️ **Disiplin & Sanksi** - Pelanggaran, SP, timeline
- 🔗 **Integrasi Keuangan** - Jurnal gaji otomatis

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 2.0 | Tanggal: 19 Januari 2026*
*Update: Penambahan Data Kontrak, Merit System, dan Disiplin/Sanksi*
