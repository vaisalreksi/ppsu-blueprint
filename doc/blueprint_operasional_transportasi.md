# 🚢 Blueprint Modul: Sistem Operasional - Transportasi Penyeberangan
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

> [!IMPORTANT]
> **PRIORITAS: TINGGI** - Menggantikan aplikasi pihak ketiga yang menambah biaya operasional

---

## 1. Latar Belakang

### Deskripsi Layanan
PT PPSU mengoperasikan layanan **penyeberangan danau** untuk masyarakat dan wisatawan. Layanan ini merupakan moda transportasi penting yang menghubungkan berbagai titik di sekitar danau.

### Kondisi Saat Ini (As-Is)

| Aspek | Kondisi | Risiko/Masalah |
|-------|---------|----------------|
| Ticketing | Menggunakan aplikasi pihak ketiga | Biaya lisensi bulanan, ketergantungan vendor |
| Pembayaran | Terpisah dari sistem keuangan | Rekonsiliasi manual, data tidak real-time |
| Tracking Kapal | Tidak ada | Keamanan rendah, sulit monitor operasional |
| Kapasitas | Manual counting | Overcapacity risk, pelanggaran keselamatan |
| CCTV | Tidak terintegrasi | Monitoring terbatas |
| Data Penumpang | Tidak tersimpan | Tidak bisa analisis demand |

### Dampak Masalah
- 💸 Biaya lisensi aplikasi pihak ketiga per bulan
- ⏱️ Rekonsiliasi pendapatan memakan waktu
- ⚠️ Risiko keselamatan karena overcapacity
- 📊 Tidak ada data untuk perencanaan rute/jadwal

---

## 2. Tujuan Modul

> **Membangun sistem transportasi penyeberangan terintegrasi dengan ticketing digital, GPS tracking real-time, monitoring kapasitas, dan integrasi langsung ke modul Keuangan.**

### Sasaran Utama
1. ✅ Menghilangkan ketergantungan pada aplikasi pihak ketiga
2. ✅ Ticketing digital dengan pembayaran online
3. ✅ GPS tracking kapal real-time dengan tampilan publik
4. ✅ CCTV monitoring terintegrasi
5. ✅ Warning system untuk kapasitas penumpang
6. ✅ Integrasi otomatis pendapatan ke Keuangan

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Direksi | Monitoring & decision making | Dashboard pendapatan, KPI operasional |
| Manajer Operasional | Kelola operasional harian | Monitoring kapal, jadwal, kapasitas |
| Nakhoda/Crew | Operasional kapal | Info jadwal, penumpang |
| Petugas Loket | Penjualan tiket on-site | POS system, validasi tiket |
| Penumpang | User layanan | Beli tiket, tracking kapal |
| Keuangan | Rekonsiliasi | Data pendapatan real-time |

---

## 4. Kebutuhan Fungsional

### 4.1 Manajemen Armada

```
FR-TR-001: Sistem dapat mencatat data kapal (nama, kapasitas, status)
FR-TR-002: Sistem dapat mencatat rute penyeberangan (asal-tujuan, jarak, durasi)
FR-TR-003: Sistem dapat mengatur jadwal keberangkatan per kapal
FR-TR-004: Sistem dapat mencatat status kapal (aktif, maintenance, non-aktif)
FR-TR-005: Sistem dapat mengelola crew/awak kapal
FR-TR-006: Sistem dapat mencatat histori maintenance kapal
```

### 4.2 Ticketing & Reservasi

```
FR-TR-010: Sistem dapat menampilkan jadwal keberangkatan ke publik
FR-TR-011: User dapat membeli tiket online via website/mobile app
FR-TR-012: User dapat memilih jadwal keberangkatan
FR-TR-013: Sistem generate e-ticket dengan QR code
FR-TR-014: Petugas loket dapat menjual tiket on-site (POS)
FR-TR-015: Sistem dapat scan QR code untuk validasi tiket
FR-TR-016: Sistem menampilkan sisa kapasitas per jadwal
FR-TR-017: Sistem dapat cancel/refund tiket dengan kebijakan
```

**Jenis Tiket:**
- 🚶 Penumpang Dewasa
- 👶 Penumpang Anak
- 🏍️ Kendaraan Roda 2
- 🚗 Kendaraan Roda 4
- 📦 Barang/Cargo

### 4.3 GPS Tracking Kapal

```
FR-TR-020: Sistem dapat menerima data GPS dari device di kapal
FR-TR-021: Sistem menampilkan posisi kapal real-time di peta
FR-TR-022: User publik dapat melihat tracking kapal via website
FR-TR-023: Sistem mencatat histori perjalanan (track log)
FR-TR-024: Sistem dapat menghitung ETA (Estimated Time Arrival)
FR-TR-025: Sistem memberikan alert jika kapal keluar dari rute
```

### 4.4 Monitoring Kapasitas

```
FR-TR-030: Sistem dapat tracking jumlah penumpang boarding
FR-TR-031: Sistem menampilkan kapasitas terisi vs maksimum
FR-TR-032: Sistem memberikan WARNING saat kapasitas 80%
FR-TR-033: Sistem memberikan ALERT saat kapasitas 90%
FR-TR-034: Sistem BLOCK penjualan tiket saat kapasitas 100%
FR-TR-035: Dashboard menampilkan status kapasitas real-time
```

**Threshold Warning:**
| Level | Kapasitas | Aksi |
|-------|-----------|------|
| 🟢 Normal | < 80% | - |
| 🟡 Warning | 80-90% | Notifikasi ke operator |
| 🟠 Alert | 90-100% | Notifikasi ke manajer |
| 🔴 Full | 100% | Block penjualan |

### 4.5 CCTV Monitoring

```
FR-TR-040: Sistem dapat menampilkan feed CCTV dari kapal
FR-TR-041: Sistem dapat menampilkan CCTV dermaga
FR-TR-042: Sistem dapat recording dan playback
FR-TR-043: Operator dapat akses CCTV via dashboard
```

### 4.6 Pembayaran & Integrasi Keuangan

```
FR-TR-050: Sistem mendukung pembayaran tunai (loket)
FR-TR-051: Sistem mendukung pembayaran digital (QRIS, e-wallet)
FR-TR-052: Sistem mendukung transfer bank/VA
FR-TR-053: Setiap transaksi otomatis posting ke Keuangan
FR-TR-054: Sistem generate laporan pendapatan harian
FR-TR-055: Sistem dapat rekonsiliasi otomatis dengan bank
```

### 4.7 Manajemen BBM (Bahan Bakar)

> [!IMPORTANT]
> Tracking konsumsi BBM untuk efisiensi biaya operasional dan perencanaan

```
FR-TR-060: Sistem dapat mencatat pengisian BBM per kapal
FR-TR-061: Sistem mencatat data supplier BBM
FR-TR-062: Sistem mencatat harga BBM per liter
FR-TR-063: Sistem menghitung konsumsi BBM per trip
FR-TR-064: Sistem menghitung rasio konsumsi (liter/km atau liter/jam)
FR-TR-065: Dashboard menampilkan trend konsumsi BBM
FR-TR-066: Sistem alert jika konsumsi melebihi standar
FR-TR-067: Sistem forecast kebutuhan BBM bulanan
FR-TR-068: Setiap pembelian BBM otomatis jurnal ke Keuangan
```

**Form Pengisian BBM:**

| Field | Type | Required | Keterangan |
|-------|------|:--------:|------------|
| Kapal | Dropdown | ✅ | Pilih armada |
| Tanggal Pengisian | Datetime | ✅ | Timestamp |
| Supplier | Dropdown | ✅ | SPBU / Agen |
| Volume (Liter) | Number | ✅ | Jumlah liter |
| Harga per Liter | Currency | ✅ | Rp/liter |
| Total Harga | Currency | Auto | Auto-calculate |
| No. Struk/Bon | Text | ✅ | Bukti pembelian |
| Jam Mesin (Hour Meter) | Number | ✅ | Untuk hitung konsumsi |
| Petugas | Dropdown | ✅ | Yang melakukan |
| Foto Bukti | File | ❌ | Upload struk |

**KPI BBM:**

| KPI | Target | Alert |
|-----|--------|-------|
| Konsumsi per Trip | < 150 L | 🟡 > 150 L, 🔴 > 180 L |
| Rasio Liter/Jam | < 25 L/jam | 🟡 > 25 L, 🔴 > 30 L |
| Variance vs Budget | < 10% | 🔴 > 10% |

### 4.8 Manajemen Maintenance Kapal

```
FR-TR-070: Sistem dapat scheduling maintenance berkala (preventive)
FR-TR-071: Sistem dapat mencatat maintenance request (corrective)
FR-TR-072: Sistem dapat checklist item maintenance
FR-TR-073: Sistem alert reminder maintenance yang akan jatuh tempo
FR-TR-074: Sistem mencatat histori maintenance per kapal
FR-TR-075: Sistem mencatat biaya maintenance
FR-TR-076: Dashboard menampilkan status maintenance armada
FR-TR-077: Integrasi dengan Modul Risiko jika maintenance overdue
FR-TR-078: Setiap biaya maintenance jurnal ke Keuangan
```

**Jenis Maintenance:**

| Type | Periode | Contoh |
|------|---------|--------|
| 🔵 **Daily Check** | Setiap hari | Cek oli, BBM, kondisi umum |
| 🟢 **Weekly** | Mingguan | Pembersihan, cek kelistrikan |
| 🟡 **Monthly** | Bulanan | Service minor, ganti filter |
| 🟠 **Quarterly** | 3 bulan | Service major, cek mesin |
| 🔴 **Annual** | Tahunan | Docking, sertifikasi ulang |

**Checklist Daily Maintenance:**

| Item | Status | By |
|------|:------:|:--:|
| ☐ Cek level oli mesin | ✅/❌ | Nakhoda |
| ☐ Cek BBM cukup | ✅/❌ | Nakhoda |
| ☐ Cek alat keselamatan | ✅/❌ | Crew |
| ☐ Cek kondisi life jacket | ✅/❌ | Crew |
| ☐ Cek CCTV berfungsi | ✅/❌ | Operator |
| ☐ Cek GPS tracker aktif | ✅/❌ | Operator |
| ☐ Kebersihan kapal | ✅/❌ | Crew |

**Status Maintenance:**

| Status | Warna | Aksi |
|--------|:-----:|------|
| Scheduled | 🔵 | Dalam rencana |
| Upcoming (< 7 hari) | 🟡 | Alert reminder |
| Overdue | 🔴 | Block operasi + alert ke Risiko |
| In Progress | 🟠 | Kapal non-aktif |
| Completed | 🟢 | Kembali aktif |

### 4.9 Log Operasional Kapal

> [!IMPORTANT]
> Catatan sistematis, kronologis, dan terdokumentasi atas seluruh aktivitas 
> operasional kapal termasuk penerapan K3 dan manajemen risiko

```
FR-TR-080: Sistem mencatat log keberangkatan dan kedatangan
FR-TR-081: Sistem mencatat kondisi cuaca setiap trip
FR-TR-082: Sistem mencatat jumlah penumpang aktual naik/turun
FR-TR-083: Sistem mencatat kejadian/insiden selama perjalanan
FR-TR-084: Sistem mencatat penerapan K3 (safety briefing, alat safety)
FR-TR-085: Sistem mencatat kondisi mesin sebelum/sesudah trip
FR-TR-086: Log dapat di-sign off oleh Nakhoda
FR-TR-087: Histori log dapat diaudit oleh manajemen
FR-TR-088: Integrasi dengan Modul Risiko untuk insiden
FR-TR-089: Log dapat di-export untuk pelaporan instansi
```

**Struktur Log Operasional:**

```
╔══════════════════════════════════════════════════════════════╗
║              LOG OPERASIONAL KAPAL HARIAN                    ║
╠══════════════════════════════════════════════════════════════╣
║ Kapal: KM Toba I          │ Tanggal: 19 Januari 2026         ║
║ Nakhoda: Ahmad Suryadi    │ Rute: Parapat - Tuk-Tuk          ║
╠══════════════════════════════════════════════════════════════╣
║ CHECKLIST PRE-DEPARTURE (Sebelum Berangkat)                  ║
║ ☑ Briefing keselamatan dilakukan                             ║
║ ☑ Life jacket tersedia dan cukup                             ║
║ ☑ Alat pemadam api berfungsi                                 ║
║ ☑ Kondisi mesin: BAIK (Hour Meter: 2,345 jam)                ║
║ ☑ Level BBM: 85%                                             ║
║ ☑ GPS Tracker: AKTIF                                         ║
║ ☑ Cuaca: CERAH, Angin: 5 knot                                ║
╠══════════════════════════════════════════════════════════════╣
║ TRIP LOG                                                     ║
║ 08:00 - Berangkat Parapat    │ Penumpang: 45                 ║
║ 08:35 - Tiba Tuk-Tuk         │ Penumpang turun: 30           ║
║ 09:00 - Berangkat Tuk-Tuk    │ Penumpang naik: 25            ║
║ 09:35 - Tiba Parapat         │ Penumpang turun: 40           ║
║ ... (berlanjut)                                              ║
╠══════════════════════════════════════════════════════════════╣
║ KEJADIAN/INSIDEN                                             ║
║ ⚠️ 10:15 - Penumpang mabuk laut, diberikan pertolongan       ║
║ ✅ Tidak ada insiden serius                                  ║
╠══════════════════════════════════════════════════════════════╣
║ KONDISI AKHIR HARI                                           ║
║ BBM tersisa: 45% │ Hour Meter: 2,352 jam │ Status: NORMAL    ║
╠══════════════════════════════════════════════════════════════╣
║ Sign-off Nakhoda: Ahmad Suryadi        │ TTD: ____________   ║
║ Sign-off Operator: Budi Pratama        │ TTD: ____________   ║
╚══════════════════════════════════════════════════════════════╝
```

**Kategori Log Entry:**

| Kategori | Icon | Deskripsi |
|----------|:----:|-----------|
| Departure | 🚀 | Keberangkatan dari dermaga |
| Arrival | 🏁 | Kedatangan di dermaga |
| Weather | 🌤️ | Kondisi cuaca |
| K3/Safety | 🛡️ | Aktivitas keselamatan |
| Incident | ⚠️ | Kejadian/insiden |
| Maintenance | 🔧 | Catatan perawatan |
| Fuel | ⛽ | Pengisian BBM |
| Passenger | 👥 | Jumlah penumpang |

**Integrasi dengan Modul Risiko:**

| Event di Log | Trigger ke Risiko |
|--------------|-------------------|
| Incident Kategori Serius | Auto-create risk entry |
| Overcapacity detected | KRI alert + risk entry |
| Maintenance overdue | KRI alert + risk entry |
| Cuaca buruk (force majeure) | Log untuk audit trail |
| K3 checklist tidak lengkap | Warning + risk entry |

---

## 5. Integrasi Real-time dengan Keuangan

> [!IMPORTANT]
> Setiap penjualan tiket langsung tercatat di modul Keuangan

### 5.1 Dari Transportasi → Keuangan

| Event di Transportasi | Trigger ke Keuangan |
|----------------------|---------------------|
| Tiket Terjual (Cash) | Jurnal: Kas → Pendapatan Tiket |
| Tiket Terjual (Digital) | Jurnal: Bank → Pendapatan Tiket |
| Refund Tiket | Jurnal: Pendapatan → Kas/Bank |
| Settlement Payment Gateway | Rekonsiliasi otomatis |

### 5.2 Struktur Jurnal Penjualan Tiket

```
PENJUALAN TUNAI:
DEBIT:  1101 - Kas                      xxx
KREDIT: 4201 - Pendapatan Tiket Kapal   xxx

PENJUALAN DIGITAL (QRIS/E-Wallet):
DEBIT:  1102 - Bank (pending settlement) xxx
KREDIT: 4201 - Pendapatan Tiket Kapal    xxx
```

### 5.3 API Integration Points

```
POST /api/keuangan/jurnal/penjualan    → Create jurnal penjualan
POST /api/keuangan/jurnal/refund       → Create jurnal refund
GET  /api/keuangan/pendapatan/harian   → Get daily revenue
POST /api/keuangan/rekonsiliasi        → Trigger bank reconciliation
```

---

## 6. Tampilan Publik - Tracking Kapal

> [!NOTE]
> Penumpang dapat melihat posisi kapal secara real-time

### 6.1 Fitur Tampilan Publik

```
FR-PUB-001: Halaman web menampilkan peta dengan posisi kapal
FR-PUB-002: Menampilkan info kapal (nama, rute, kapasitas terisi)
FR-PUB-003: Menampilkan ETA ke setiap dermaga
FR-PUB-004: Menampilkan jadwal keberangkatan berikutnya
FR-PUB-005: Dapat diakses tanpa login
FR-PUB-006: Responsive untuk mobile
```

### 6.2 Display Informasi Dermaga

```
FR-PUB-010: Layar digital di dermaga menampilkan tracking
FR-PUB-011: Menampilkan jadwal dan countdown
FR-PUB-012: Menampilkan status kapasitas kapal
```

---

## 7. Import Data dari Sistem Existing

### 7.1 Data yang Dapat Diimpor

| Data | Sumber | Format | Prioritas |
|------|--------|--------|-----------|
| Data Armada Kapal | Excel | CSV | Tinggi |
| Data Rute | Manual input | - | Tinggi |
| Harga Tiket | Keputusan internal | - | Tinggi |
| Data Pendapatan Historis | Sistem lama | CSV | Sedang |

### 7.2 Fitur Import

```
FR-IMP-001: Sistem dapat import data kapal dari Excel
FR-IMP-002: Sistem dapat validasi data sebelum commit
FR-IMP-003: Sistem mencatat log import
```

---

## 8. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | Availability | 99.9% uptime (critical service) |
| NFR-02 | Performance | Ticketing response < 2 detik |
| NFR-03 | GPS Update | Real-time update setiap 10 detik |
| NFR-04 | Mobile | Responsive web, future mobile app |
| NFR-05 | Security | Payment PCI-DSS compliant |
| NFR-06 | Scalability | Support 1000+ transaksi/hari |
| NFR-07 | Offline Mode | POS loket dapat offline, sync later |

---

## 9. Diagram Proses Bisnis

### 9.1 Alur Pembelian Tiket Online

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Pilih     │───▶│   Pilih     │───▶│  Cek        │───▶│  Pembayaran │
│   Jadwal    │    │   Tiket     │    │  Kapasitas  │    │  (QRIS/VA)  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                               │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│   Boarding  │◀───│   Scan QR   │◀───│  E-Ticket   │◀─────────┘
│   Kapal     │    │   Validasi  │    │  + QR Code  │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 9.2 Alur GPS Tracking

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   GPS       │───▶│   Server    │───▶│   Dashboard │
│   Device    │    │   Receive   │    │   & Public  │
└─────────────┘    └─────────────┘    └─────────────┘
      │                  │                  │
      ▼                  ▼                  ▼
  Send setiap       Simpan ke DB       Real-time
  10 detik          + Calculate ETA    Map Display
```

### 9.3 Alur Kapasitas Warning

```
Tiket Terjual ──▶ Update Counter ──▶ Check Threshold
                                           │
                    ┌───────────────────────┼───────────────────────┐
                    │                       │                       │
                    ▼                       ▼                       ▼
               < 80%                   80-90%                   90-100%
             🟢 Normal             🟡 Warning               🟠 Alert
                                  Notify Operator         Notify Manager
                                                               │
                                                               ▼
                                                            = 100%
                                                         🔴 BLOCK SALE
```

---

## 10. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **Vessel** | id, name, capacity_passenger, capacity_vehicle, status, gps_device_id |
| **Route** | id, origin, destination, distance_km, duration_min, base_fare |
| **Schedule** | id, vessel_id, route_id, departure_time, arrival_time, status |
| **TicketType** | id, name, category (passenger/vehicle), price |
| **Ticket** | id, ticket_number, schedule_id, ticket_type_id, passenger_name, qr_code, status |
| **Transaction** | id, transaction_number, timestamp, total_amount, payment_method, status |
| **TransactionItem** | id, transaction_id, ticket_id, price |
| **GPSLog** | id, vessel_id, timestamp, latitude, longitude, speed |
| **BoardingLog** | id, ticket_id, scanned_at, scanned_by |
| **CapacityLog** | id, schedule_id, timestamp, passenger_count, vehicle_count |

---

## 11. Arsitektur Teknologi

### 11.1 Komponen Sistem

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                           │
├─────────────────┬─────────────────┬─────────────────────────────┤
│   Mobile Web    │   POS Loket     │   Dashboard Operator        │
│   (Ticketing)   │   (On-site)     │   (Monitoring)              │
└────────┬────────┴────────┬────────┴────────────┬────────────────┘
         │                 │                      │
         └────────────┬────┴──────────────────────┘
                      │
         ┌────────────▼─────────────┐
         │      API GATEWAY         │
         └────────────┬─────────────┘
                      │
    ┌─────────────────┼──────────────────────┐
    │                 │                      │
┌───▼────┐      ┌─────▼──────┐        ┌──────▼──────┐
│Ticketing│      │ GPS Server │        │   Payment   │
│ Service │      │  Service   │        │   Gateway   │
└───┬────┘      └─────┬──────┘        └──────┬──────┘
    │                 │                      │
    └─────────────────┼──────────────────────┘
                      │
         ┌────────────▼─────────────┐
         │        DATABASE          │
         └────────────┬─────────────┘
                      │
         ┌────────────▼─────────────┐
         │    MODUL KEUANGAN        │
         │    (Jurnal Otomatis)     │
         └──────────────────────────┘
```

### 11.2 Integrasi Hardware

| Hardware | Fungsi | Protokol |
|----------|--------|----------|
| GPS Tracker | Kirim posisi kapal | MQTT/HTTP |
| CCTV NVR | Stream & record | RTSP |
| QR Scanner | Validasi tiket | USB/Bluetooth |
| Digital Display | Info dermaga | HDMI/Network |

---

## 12. Role & Permission Matrix

| Fitur | Public | Petugas | Operator | Manajer | Keuangan |
|-------|:------:|:-------:|:--------:|:-------:|:--------:|
| Lihat Jadwal | ✅ | ✅ | ✅ | ✅ | ✅ |
| Beli Tiket | ✅ | ✅ | ❌ | ❌ | ❌ |
| Jual Tiket (POS) | ❌ | ✅ | ✅ | ✅ | ❌ |
| Scan/Validasi Tiket | ❌ | ✅ | ✅ | ✅ | ❌ |
| Lihat Tracking | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dashboard Operasional | ❌ | ❌ | ✅ | ✅ | ❌ |
| Kelola Jadwal | ❌ | ❌ | ✅ | ✅ | ❌ |
| Kelola Armada | ❌ | ❌ | ❌ | ✅ | ❌ |
| Lihat Laporan Keuangan | ❌ | ❌ | ❌ | ✅ | ✅ |
| Akses CCTV | ❌ | ❌ | ✅ | ✅ | ❌ |

---

## 13. Laporan yang Dibutuhkan

### Laporan Operasional
1. Jadwal Keberangkatan Harian
2. Laporan Ketepatan Waktu (On-Time Performance)
3. Load Factor per Jadwal
4. Laporan Kapasitas Penumpang

### Laporan Pendapatan
1. Pendapatan Harian per Rute
2. Pendapatan per Jenis Tiket
3. Rekap Pendapatan Bulanan
4. Perbandingan Pendapatan vs Target

### Laporan Tracking
1. Track Log per Kapal
2. Histori Perjalanan
3. Laporan Anomali Rute

---

## 14. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Master Data (Kapal, Rute, Jadwal) | 2 minggu |
| **Fase 2** | Ticketing Engine + QR | 4 minggu |
| **Fase 3** | Payment Gateway Integration | 3 minggu |
| **Fase 4** | GPS Tracking + Public Display | 3 minggu |
| **Fase 5** | Capacity Monitoring + Alert | 2 minggu |
| **Fase 6** | CCTV Integration | 2 minggu |
| **Fase 7** | Integrasi Keuangan | 2 minggu |
| **Fase 8** | UAT & Go-live | 2 minggu |
| | **Total** | **20 minggu** |

---

## 15. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| GPS signal lost | Tinggi | Fallback ke GSM, caching |
| Payment gateway down | Tinggi | Backup payment method, offline mode |
| Overcapacity tidak terdeteksi | Tinggi | Multiple check points, CCTV verify |
| Network issue | Sedang | Offline mode untuk POS |

---

## 16. Kriteria Sukses (KPI)

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| Ticketing uptime | > 99.9% | Monitoring system |
| GPS update latency | < 15 detik | Log timestamp |
| Overcapacity incident | 0 | Incident report |
| Revenue reconciliation | 100% match | Daily audit |
| Online ticket adoption | > 50% | Transaction data |
| Customer satisfaction | > 4.0/5 | Survey |

---

## 17. Kesimpulan

Sistem Operasional Transportasi akan:

> [!IMPORTANT]
> - **Menghilangkan** biaya aplikasi pihak ketiga
> - **Meningkatkan** keselamatan dengan monitoring kapasitas
> - **Mempermudah** penumpang dengan ticketing digital
> - **Memberikan** transparansi dengan GPS tracking publik
> - **Mengintegrasikan** pendapatan langsung ke Keuangan

Fitur unggulan:
- 🎫 **Ticketing Digital** - Beli tiket online, e-ticket QR code
- 📍 **GPS Tracking** - Posisi kapal real-time di website
- ⚠️ **Capacity Warning** - Notifikasi otomatis saat hampir penuh
- 📹 **CCTV Monitoring** - Keamanan terintegrasi
- 💰 **Auto-posting** - Pendapatan langsung masuk ke Keuangan

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 1.0 | Tanggal: 18 Januari 2026*
