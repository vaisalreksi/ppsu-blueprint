# 📝 Blueprint Modul: Sistem Kesekretariatan
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

---

## 1. Latar Belakang

Sistem Kesekretariatan merupakan modul untuk mengelola administrasi surat-menyurat, disposisi, arsip, rapat, dan manajemen kontrak di PT PPSU. Modul ini menjadi tulang punggung komunikasi formal perusahaan.

### Kondisi Saat Ini (As-Is)
| Aspek | Kondisi |
|-------|---------|
| Penomoran Surat | Manual, risiko duplikasi tinggi |
| Disposisi | Paper-based, lambat & sulit dilacak |
| Arsip | Fisik, pencarian memakan waktu |
| Rapat | Tidak terdokumentasi dengan baik |
| Kontrak | Monitoring manual, risiko expired |

### Dampak Masalah
- ⏱️ Waktu pencarian dokumen lama (15-30 menit/dokumen)
- ⚠️ Risiko kehilangan surat/dokumen penting
- 📉 Disposisi lambat menghambat keputusan
- 💔 Kontrak expired tanpa peringatan dini

---

## 2. Tujuan Modul

> **Mewujudkan administrasi kesekretariatan yang digital, terintegrasi, dan mendukung GCG melalui audit trail yang lengkap.**

### Sasaran Utama
1. Otomatisasi penomoran surat dengan format standar
2. Disposisi digital dengan tracking real-time
3. Arsip digital terindeks dan mudah dicari
4. Manajemen rapat dengan reminder
5. Monitoring kontrak dengan early warning

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Direksi | Approval & Disposisi | Disposisi cepat, overview status |
| Sekretaris | Operator Utama | Input mudah, tracking lengkap |
| Manajer Unit | Penerima Disposisi | Notifikasi & tracking |
| Legal/Hukum | Pengelola Kontrak | Monitoring masa berlaku |
| Auditor | Pengawasan | Audit trail & laporan |

---

## 4. Kebutuhan Fungsional

### 4.1 Manajemen Surat Masuk

```
FR-SK-001: Sistem dapat meregistrasi surat masuk dengan nomor otomatis
FR-SK-002: Sistem dapat menyimpan scan/foto surat masuk
FR-SK-003: Sistem dapat melakukan disposisi ke penerima
FR-SK-004: Sistem dapat melacak status disposisi (belum dibaca/dibaca/ditindaklanjuti)
FR-SK-005: Sistem memberikan notifikasi ke penerima disposisi
```

**Format Nomor Surat Masuk:** `SM-[UNIT]-[YYYY]-[NNNN]`
- Contoh: `SM-TRN-2026-0001` (Surat Masuk, Unit Transportasi, Tahun 2026, Urutan 1)

### 4.2 Manajemen Surat Keluar

```
FR-SK-010: Sistem dapat membuat draft surat keluar
FR-SK-011: Sistem menyediakan nomor surat otomatis setelah approval
FR-SK-012: Sistem menyimpan template surat standar
FR-SK-013: Sistem mencatat tujuan dan tanggal pengiriman
FR-SK-014: Sistem dapat mencetak surat dengan kop resmi
```

**Format Nomor Surat Keluar:** `[NNNN]/PPSU/[UNIT]/[MM]/[YYYY]`
- Contoh: `0025/PPSU/DIR/01/2026`

### 4.3 Disposisi Digital

```
FR-SK-020: Direksi dapat memberikan instruksi disposisi via sistem
FR-SK-021: Disposisi dapat di-forward ke multiple penerima
FR-SK-022: Sistem mencatat waktu baca dan tindak lanjut
FR-SK-023: Sistem menyediakan reminder untuk disposisi pending
FR-SK-024: Sistem menyediakan eskalasi untuk disposisi overdue
```

### 4.4 Arsip Digital

```
FR-SK-030: Sistem dapat menyimpan dokumen dalam format PDF/Image
FR-SK-031: Sistem dapat mengkategorikan dokumen (Akta, Kontrak, Surat, dll)
FR-SK-032: Sistem mendukung pencarian full-text
FR-SK-033: Sistem menyediakan folder/struktur arsip hierarkis
FR-SK-034: Sistem mencatat siapa yang mengakses dokumen
```

**Kategori Arsip:**
- 📄 Akta Perusahaan
- 📃 Kontrak & Perjanjian
- ✉️ Surat Masuk/Keluar
- 📋 Notulen Rapat
- 📑 Izin & Perizinan
- 📁 Dokumen Legal Lainnya

### 4.5 Manajemen Rapat

```
FR-SK-040: Sistem dapat menjadwalkan rapat dengan undangan
FR-SK-041: Sistem mengirim reminder rapat (H-1, H-0)
FR-SK-042: Sistem dapat mencatat notulen rapat
FR-SK-043: Sistem dapat melampirkan materi rapat
FR-SK-044: Sistem dapat tracking action item dari rapat
```

### 4.6 Manajemen Kontrak & Legal

```
FR-SK-050: Sistem dapat menyimpan data kontrak (pihak, nilai, periode)
FR-SK-051: Sistem memberikan alert sebelum kontrak expired (30, 14, 7 hari)
FR-SK-052: Sistem menyimpan histori revisi/adendum kontrak
FR-SK-053: Sistem dapat melakukan review & approval kontrak baru
FR-SK-054: Sistem mencatat perizinan dan masa berlakunya
```

---

## 5. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | Security | Akses berbasis role, enkripsi dokumen sensitif |
| NFR-02 | Performance | Load dokumen < 3 detik |
| NFR-03 | Availability | Uptime 99.5% |
| NFR-04 | Audit | Semua aktivitas tercatat dengan timestamp |
| NFR-05 | Backup | Backup harian, retensi 1 tahun |
| NFR-06 | Storage | Kapasitas minimal 500 GB, scalable |

---

## 6. Diagram Proses Bisnis

### 6.1 Alur Surat Masuk & Disposisi

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Surat     │───▶│  Registrasi │───▶│  Disposisi  │───▶│   Tindak    │
│   Masuk     │    │  & Scan     │    │   Direksi   │    │   Lanjut    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
      │                  │                  │                  │
      ▼                  ▼                  ▼                  ▼
  📬 Terima        📝 Input data      ✍️ Instruksi      ✅ Eksekusi
  fisik/email      + upload scan      tertulis digital   oleh penerima
```

### 6.2 Alur Surat Keluar

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Draft     │───▶│   Review    │───▶│  Approval   │───▶│   Kirim     │
│   Surat     │    │   Atasan    │    │  + Nomor    │    │  & Arsip    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### 6.3 Alur Manajemen Kontrak

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Draft     │───▶│   Review    │───▶│    TTD &    │───▶│  Monitoring │
│  Kontrak    │    │   Legal     │    │   Arsip     │    │  Berlaku    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                               │
                                            ┌──────────────────┼──────────────────┐
                                            ▼                  ▼                  ▼
                                      🔔 Alert           🔄 Perpanjang       ❌ Terminate
                                      H-30               atau Revisi          Kontrak
```

---

## 7. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **Surat** | id, nomor, tanggal, perihal, jenis (masuk/keluar), pengirim, penerima, file_path, status |
| **Disposisi** | id, surat_id, dari_user, ke_user, instruksi, tanggal, status, deadline |
| **Arsip** | id, kode, nama, kategori, deskripsi, file_path, tanggal_upload, uploaded_by |
| **Kontrak** | id, nomor, judul, pihak_1, pihak_2, nilai, tanggal_mulai, tanggal_berakhir, status |
| **Rapat** | id, judul, tanggal, waktu, lokasi, peserta[], notulen, action_items[] |
| **Perizinan** | id, nama_izin, nomor_izin, tanggal_terbit, tanggal_expired, instansi_penerbit |

### Relasi

```
User ──┬── 1:N ── Surat (pembuat)
       ├── 1:N ── Disposisi (pengirim/penerima)
       └── 1:N ── Arsip (uploader)

Surat ──── 1:N ── Disposisi
Surat ──── N:1 ── Arsip

Kontrak ── 1:N ── ArsipKontrak (adendum, dokumen pendukung)

Rapat ──── N:N ── User (peserta)
Rapat ──── 1:N ── ActionItem
```

---

## 8. User Interface Mockup

### 8.1 Dashboard Sekretariat
- Statistik surat hari ini (masuk/keluar)
- Daftar disposisi pending
- Kontrak akan expired (30 hari)
- Jadwal rapat minggu ini

### 8.2 Form Registrasi Surat Masuk
| Field | Tipe | Required |
|-------|------|----------|
| Tanggal Terima | Date | ✅ |
| Asal Surat | Text | ✅ |
| Nomor Surat Asal | Text | ❌ |
| Tanggal Surat | Date | ✅ |
| Perihal | Text | ✅ |
| Klasifikasi | Select | ✅ |
| Sifat | Select (Biasa/Penting/Rahasia) | ✅ |
| Lampiran | File Upload | ❌ |

### 8.3 Panel Disposisi Direksi
- Inbox disposisi belum diproses
- Form instruksi disposisi
- Pilih penerima (multi-select)
- Set deadline
- Tombol kirim

---

## 9. Integrasi dengan Modul Lain

| Modul | Jenis Integrasi |
|-------|-----------------|
| **Dashboard Top Management** | Statistik surat, kontrak expired, disposisi pending |
| **Human Capital** | Data user untuk disposisi dan akses |
| **Keuangan** | Invoice & dokumen tagihan |
| **Bagian Umum** | Dokumen pengadaan |
| **CACM** | Audit trail & sampling transaksi |

---

## 10. Role & Permission Matrix

| Fitur | Sekretaris | Manajer | Direksi | Legal | Admin |
|-------|:----------:|:-------:|:-------:|:-----:|:-----:|
| Input Surat Masuk | ✅ | ❌ | ❌ | ❌ | ✅ |
| Input Surat Keluar | ✅ | ✅ | ✅ | ✅ | ✅ |
| Disposisi | ❌ | ✅ | ✅ | ❌ | ❌ |
| Terima Disposisi | ✅ | ✅ | ❌ | ✅ | ❌ |
| Upload Arsip | ✅ | ✅ | ❌ | ✅ | ✅ |
| Kelola Kontrak | ❌ | ❌ | ❌ | ✅ | ✅ |
| Kelola Rapat | ✅ | ✅ | ✅ | ❌ | ✅ |
| Laporan | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 11. Laporan yang Dibutuhkan

1. **Laporan Surat Masuk/Keluar** - Periode, klasifikasi, status
2. **Laporan Disposisi** - Status, overdue, per penerima
3. **Laporan Kontrak** - Aktif, expired, akan expired
4. **Laporan Perizinan** - Masa berlaku
5. **Rekapitulasi Rapat** - Jumlah, peserta, action item pending

---

## 12. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Surat Masuk & Disposisi | 4 minggu |
| **Fase 2** | Surat Keluar & Arsip Digital | 3 minggu |
| **Fase 3** | Manajemen Rapat | 2 minggu |
| **Fase 4** | Kontrak & Perizinan | 3 minggu |
| **Fase 5** | Integrasi & Testing | 2 minggu |
| | **Total** | **14 minggu** |

---

## 13. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| User resistance | Tinggi | Training intensif, change management |
| Data migration | Sedang | Pilot test, backup |
| Storage penuh | Sedang | Cloud storage, compression |
| Downtime | Tinggi | High availability, backup server |

---

## 14. Kriteria Sukses (KPI)

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| Waktu registrasi surat | < 2 menit | Stopwatch |
| Waktu pencarian arsip | < 30 detik | Log sistem |
| Disposisi diproses | < 24 jam | Avg time |
| Kontrak expired tanpa peringatan | 0% | Monitoring |
| User adoption | > 90% | Login aktif |

---

## 15. Kesimpulan

Sistem Kesekretariatan akan menjadi fondasi digitalisasi administrasi PT PPSU dengan fokus pada:

> [!IMPORTANT]
> - **Otomatisasi** penomoran surat dan notifikasi
> - **Paperless** dengan arsip digital terindeks
> - **Real-time tracking** disposisi dan kontrak
> - **Audit trail** lengkap untuk GCG

Implementasi modul ini diharapkan dapat:
- Mengurangi waktu pencarian dokumen hingga **80%**
- Menghilangkan risiko kontrak expired tanpa peringatan
- Meningkatkan kecepatan disposisi hingga **65%**
- Menyediakan data real-time untuk dashboard manajemen

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 1.0 | Tanggal: 17 Januari 2026*
