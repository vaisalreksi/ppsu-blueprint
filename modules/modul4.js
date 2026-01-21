// ============================================
// MODUL 4 - SISTEM BAGIAN UMUM
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_bagian_umum = {
    id: 'modul_bagian_umum',
    title: 'Modul 4 - Sistem Bagian Umum',
    subtitle: 'Manajemen Aset, Inventori, Pengadaan, Vendor, dan Maintenance Terintegrasi',
    icon: '🏢',
    menuTitle: 'Sistem Bagian Umum',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem Bagian Umum',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Membangun sistem pengelolaan aset, inventori, dan pengadaan yang terintegrasi, 
                         transparan, dan mendukung efisiensi operasional. Database aset terpusat dengan 
                         tracking lokasi, kondisi, dan maintenance history.`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Aset:</strong> Data manual (Excel), aset hilang/tidak termonitor<br>
                         <strong>2. Inventori:</strong> Stock tidak real-time, stock out mendadak<br>
                         <strong>3. Pengadaan:</strong> Proses lama (2-4 minggu), tidak terstandar<br>
                         <strong>4. Vendor:</strong> Tidak ada histori evaluasi kinerja<br>
                         <strong>5. Maintenance:</strong> Reaktif, biaya tidak terkontrol`
            },
            {
                icon: '✅',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Fitur Utama (5 Kelompok)',
                content: `<strong>1. Manajemen Aset:</strong> Database, mutasi, QR code, stock opname<br>
                         <strong>2. Inventori:</strong> Stock real-time, reorder point, alert<br>
                         <strong>3. Pengadaan:</strong> PR → RFQ → PO → GR dengan approval workflow<br>
                         <strong>4. Vendor:</strong> Master, scoring, blacklist, approved list<br>
                         <strong>5. Maintenance:</strong> Preventif terjadwal, reaktif, cost tracking`
            },
            {
                icon: '📋',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Approval Workflow Pengadaan',
                content: `<strong>< Rp 10 juta:</strong> Manajer Umum<br>
                         <strong>Rp 10-50 juta:</strong> Direktur terkait<br>
                         <strong>> Rp 50 juta:</strong> Direktur Utama<br>
                         <em>Budget checking otomatis sebelum approval</em>`
            },
            {
                icon: '👤',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Aktor Terlibat',
                content: `<strong>1. Manajer Umum:</strong> Kelola operasional, approval<br>
                         <strong>2. Staff Umum:</strong> Input data, eksekusi<br>
                         <strong>3. Unit Bisnis:</strong> Requester, lapor kerusakan<br>
                         <strong>4. Keuangan:</strong> Validasi budget, AP<br>
                         <strong>5. Direksi:</strong> Approval pengadaan besar`
            },
            {
                icon: '🔗',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Integrasi dengan Modul Lain',
                content: `<strong>Keuangan:</strong> PO → AP, sync Fixed Asset, budget check<br>
                         <strong>Operasional:</strong> Permintaan BBM, sparepart, ATK<br>
                         <strong>Dashboard:</strong> Nilai aset, status pengadaan<br>
                         <strong>CACM:</strong> Audit trail transaksi`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Bagian Umum',
        mermaid: `flowchart LR

%% ===================== PROSES PENGADAAN =====================
subgraph PROC["📦 PROSES PENGADAAN"]
    direction TB
    P1[Purchase<br>Requisition] --> P2{Budget<br>Check}
    P2 -->|OK| P3{Approval<br>Workflow}
    P2 -->|Over| P2A[Revisi /<br>Reject]

    P3 -->|< 10jt| P3A[Manajer<br>Umum]
    P3 -->|10–50jt| P3B[Direktur<br>Terkait]
    P3 -->|> 50jt| P3C[Direktur<br>Utama]

    P3A --> P4[RFQ ke<br>Vendor]
    P3B --> P4
    P3C --> P4

    P4 --> P5[Evaluasi<br>Penawaran]
    P5 --> P6[Purchase<br>Order]
    P6 --> P7[Good<br>Receipt]
    P7 --> P8[Invoice<br>Matching]
    P8 --> P9[Posting<br>AP]
end

%% ===================== INVENTORI =====================
subgraph INV["📊 INVENTORI"]
    direction TB
    I1[Penerimaan<br>Barang] --> I2[Update<br>Stock]
    I2 --> I3{Stock <br>Reorder?}
    I3 -->|Ya| I4[🔔 Alert<br>Reorder]
    I4 --> I5[Generate<br>PR Otomatis]
    I3 -->|Tidak| I6[Pengeluaran<br>Barang]
    I6 --> I2
end

%% ===================== VENDOR =====================
subgraph VENDOR["👥 VENDOR MANAGEMENT"]
    direction TB
    V1[Master<br>Vendor] --> V2[Evaluasi<br>Kinerja]
    V2 --> V3{Score<br>OK?}
    V3 -->|Ya| V4[Approved<br>Vendor List]
    V3 -->|Tidak| V5[⛔ Blacklist]
end

%% ===================== ASET =====================
subgraph ASSET["🏷️ MANAJEMEN ASET"]
    direction TB
    A1[Input<br>Data Aset] --> A2[Generate<br>QR Code]
    A2 --> A3[Tracking<br>Lokasi]
    A3 --> A4{Mutasi?}
    A4 -->|Ya| A5[Update<br>Lokasi]
    A5 --> A3
    A4 -->|Tidak| A6[Stock<br>Opname]
end

%% ===================== MAINTENANCE =====================
subgraph MAINT["🔧 MAINTENANCE"]
    direction TB
    M1[Jadwal<br>Preventif] --> M2[Reminder<br>Otomatis]
    M2 --> M3[Eksekusi<br>Maintenance]
    M3 --> M4[Update<br>Histori]

    M5[Laporan<br>Kerusakan] --> M6[Diagnosa]
    M6 --> M3
end

%% ===================== NODE EKSTERNAL =====================
KEU[(💰 KEUANGAN<br>Fixed Asset)]

%% ===================== RELASI ANTAR MODUL =====================
P7 --> I1
I5 --> P1
P6 --> V2
A1 --> KEU

%% ===================== STYLING =====================
style PROC fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style INV fill:#fef3c7,stroke:#f59e0b,color:#78350f
style VENDOR fill:#f3e8ff,stroke:#a855f7,color:#581c87
style ASSET fill:#dcfce7,stroke:#22c55e,color:#166534
style MAINT fill:#fce7f3,stroke:#ec4899,color:#831843
style KEU fill:#e0e7ff,stroke:#6366f1,color:#3730a3`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem Bagian Umum',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard Bagian Umum -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">🏢 Dashboard Bagian Umum</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Total Aset</div>
                                <div style="font-size: 1.25rem; font-weight: 700;">1,245</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Rp 45.8 M</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Stock Items</div>
                                <div style="font-size: 1.25rem; font-weight: 700;">328</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">12 below reorder</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">PR Pending</div>
                                <div style="font-size: 1.25rem; font-weight: 700;">8</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Rp 125 Jt</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Maintenance Due</div>
                                <div style="font-size: 1.25rem; font-weight: 700;">5</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Minggu ini</div>
                            </div>
                        </div>

                        <!-- Alert -->
                        <div style="background: #fef2f2; border: 1px solid #ef4444; padding: 0.75rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.25rem;">🔔</span>
                            <div style="font-size: 0.85rem;">
                                <strong>12 item</strong> stock di bawah reorder point - 
                                <a href="#" style="color: #3b82f6;">Lihat detail</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Daftar Aset -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">🏷️ Daftar Aset</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">+ Tambah Aset</button>
                            <button class="mockup-btn">📷 Scan QR</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Kode</th>
                                    <th>Nama Aset</th>
                                    <th>Kategori</th>
                                    <th>Lokasi</th>
                                    <th>Kondisi</th>
                                    <th>Nilai Buku</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-weight: 500; font-family: monospace;">AST-KND-001</td>
                                    <td>Toyota Hiace 2023</td>
                                    <td>🚗 Kendaraan</td>
                                    <td>Pool Transportasi</td>
                                    <td><span class="mockup-status approved">Baik</span></td>
                                    <td style="text-align: right;">Rp 425.000.000</td>
                                    <td><button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Detail</button></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500; font-family: monospace;">AST-IT-045</td>
                                    <td>Laptop Dell Latitude</td>
                                    <td>💻 IT</td>
                                    <td>Ruang Keuangan</td>
                                    <td><span class="mockup-status approved">Baik</span></td>
                                    <td style="text-align: right;">Rp 12.500.000</td>
                                    <td><button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Detail</button></td>
                                </tr>
                                <tr style="background: #fefce8;">
                                    <td style="font-weight: 500; font-family: monospace;">AST-MSN-012</td>
                                    <td>Genset 50 KVA</td>
                                    <td>🔧 Mesin</td>
                                    <td>Gedung PRSU</td>
                                    <td><span class="mockup-status pending">Perlu Service</span></td>
                                    <td style="text-align: right;">Rp 85.000.000</td>
                                    <td><button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Detail</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Form Purchase Requisition -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                        <span class="mockup-title">📝 Purchase Requisition</span>
                    </div>
                    <div class="mockup-content">
                        <div style="background: #dbeafe; border: 1px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.85rem;">
                            📋 <strong>No. PR:</strong> PR-2026-01-0089 &nbsp;|&nbsp; 
                            <strong>Status:</strong> <span style="color: #f59e0b;">⏳ Pending Approval</span>
                        </div>
                        
                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Tanggal *</label>
                                <input type="date" class="mockup-input" value="2026-01-18">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Unit Pemohon *</label>
                                <select class="mockup-select">
                                    <option>Unit Transportasi</option>
                                    <option>Unit PRSU</option>
                                    <option>Unit Teknik</option>
                                </select>
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Keperluan *</label>
                            <input type="text" class="mockup-input" value="Pengadaan ATK Bulan Januari 2026">
                        </div>

                        <!-- PR Items -->
                        <div style="background: #f8fafc; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
                            <div style="font-weight: 600; margin-bottom: 0.75rem;">📦 Detail Barang</div>
                            <table class="mockup-table" style="margin: 0;">
                                <thead>
                                    <tr>
                                        <th style="width: 40%;">Nama Barang</th>
                                        <th style="width: 15%;">Qty</th>
                                        <th style="width: 15%;">Satuan</th>
                                        <th style="width: 20%; text-align: right;">Est. Harga</th>
                                        <th style="width: 10%;"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" class="mockup-input" value="Kertas HVS A4 80gsm" style="padding: 0.4rem;"></td>
                                        <td><input type="number" class="mockup-input" value="50" style="padding: 0.4rem;"></td>
                                        <td><select class="mockup-select" style="padding: 0.4rem;"><option>Rim</option></select></td>
                                        <td><input type="text" class="mockup-input" value="2,500,000" style="text-align: right; padding: 0.4rem;"></td>
                                        <td><button style="background: #ef4444; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer;">×</button></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="mockup-input" value="Tinta Printer HP 680" style="padding: 0.4rem;"></td>
                                        <td><input type="number" class="mockup-input" value="20" style="padding: 0.4rem;"></td>
                                        <td><select class="mockup-select" style="padding: 0.4rem;"><option>Pcs</option></select></td>
                                        <td><input type="text" class="mockup-input" value="3,000,000" style="text-align: right; padding: 0.4rem;"></td>
                                        <td><button style="background: #ef4444; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer;">×</button></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr style="background: #e2e8f0;">
                                        <td colspan="3" style="font-weight: 600;">TOTAL ESTIMASI</td>
                                        <td style="text-align: right; font-weight: 600;">Rp 5,500,000</td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                            <button style="margin-top: 0.75rem; background: #e2e8f0; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">+ Tambah Barang</button>
                        </div>

                        <!-- Budget Check -->
                        <div style="background: #dcfce7; border: 1px solid #22c55e; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="font-size: 0.85rem;">
                                ✅ <strong>Budget Check:</strong> Tersedia Rp 25.000.000 dari anggaran ATK
                            </div>
                        </div>

                        <div style="display: flex; gap: 1rem;">
                            <button class="mockup-submit" style="flex: 1;">💾 Simpan Draft</button>
                            <button class="mockup-submit" style="flex: 1; background: #22c55e;">📤 Submit for Approval</button>
                        </div>
                    </div>
                </div>

                <!-- Vendor List -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                        <span class="mockup-title">👥 Daftar Vendor</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #7c3aed;">+ Tambah Vendor</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Kode</th>
                                    <th>Nama Vendor</th>
                                    <th>Kategori</th>
                                    <th>Total Transaksi</th>
                                    <th>Score</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-weight: 500;">VND-001</td>
                                    <td>CV Sumber Makmur</td>
                                    <td>ATK & Percetakan</td>
                                    <td>Rp 45.000.000</td>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                                            <span style="color: #f59e0b;">★★★★</span><span style="color: #cbd5e1;">★</span>
                                            <span style="font-size: 0.75rem; color: #64748b;">(4.2)</span>
                                        </div>
                                    </td>
                                    <td><span class="mockup-status approved">✅ Approved</span></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500;">VND-015</td>
                                    <td>PT Pertamina</td>
                                    <td>BBM</td>
                                    <td>Rp 450.000.000</td>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                                            <span style="color: #f59e0b;">★★★★★</span>
                                            <span style="font-size: 0.75rem; color: #64748b;">(4.8)</span>
                                        </div>
                                    </td>
                                    <td><span class="mockup-status approved">✅ Approved</span></td>
                                </tr>
                                <tr style="background: #fef2f2;">
                                    <td style="font-weight: 500;">VND-008</td>
                                    <td>CV Jaya Abadi</td>
                                    <td>Bangunan</td>
                                    <td>Rp 75.000.000</td>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                                            <span style="color: #f59e0b;">★★</span><span style="color: #cbd5e1;">★★★</span>
                                            <span style="font-size: 0.75rem; color: #64748b;">(2.1)</span>
                                        </div>
                                    </td>
                                    <td><span class="mockup-status rejected">⛔ Blacklist</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Maintenance Schedule -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
                        <span class="mockup-title">🔧 Jadwal Maintenance</span>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Aset</th>
                                    <th>Jenis Maintenance</th>
                                    <th>Jadwal</th>
                                    <th>PIC</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td>Toyota Hiace (AST-KND-001)</td>
                                    <td>Service Berkala 10.000 km</td>
                                    <td style="color: #dc2626; font-weight: 500;">18 Jan 2026</td>
                                    <td>Budi S.</td>
                                    <td><span class="mockup-status rejected">🔴 Overdue</span></td>
                                </tr>
                                <tr style="background: #fefce8;">
                                    <td>Genset 50 KVA (AST-MSN-012)</td>
                                    <td>Ganti Oli & Filter</td>
                                    <td>20 Jan 2026</td>
                                    <td>Ahmad R.</td>
                                    <td><span class="mockup-status pending">🟡 Due Soon</span></td>
                                </tr>
                                <tr>
                                    <td>AC Central Gedung (AST-MSN-005)</td>
                                    <td>Pembersihan Filter</td>
                                    <td>25 Jan 2026</td>
                                    <td>Dedi P.</td>
                                    <td><span class="mockup-status approved">🟢 Scheduled</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `
    }
};

// ============================================
// REGISTER MODULE
// ============================================
if (typeof window.ppsuModules === 'undefined') {
    window.ppsuModules = [];
}
window.ppsuModules.push(modul_bagian_umum);
