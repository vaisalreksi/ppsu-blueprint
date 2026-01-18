// ============================================
// MODUL 2 - SISTEM KESEKRETARIATAN
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_kesekretariatan = {
    id: 'modul_kesekretariatan',
    title: 'Modul 2 - Sistem Kesekretariatan',
    subtitle: 'Digitalisasi administrasi surat-menyurat, disposisi, arsip, rapat, dan manajemen kontrak',
    icon: '📝',
    menuTitle: 'Sistem Kesekretariatan',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem Kesekretariatan',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Mewujudkan administrasi kesekretariatan yang digital, terintegrasi, dan mendukung GCG 
                         melalui audit trail yang lengkap. Sasaran: otomatisasi penomoran, disposisi digital 
                         dengan tracking real-time, arsip terindeks, dan early warning kontrak.`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Penomoran Surat:</strong> Manual, risiko duplikasi tinggi<br>
                         <strong>2. Disposisi:</strong> Paper-based, lambat & sulit dilacak<br>
                         <strong>3. Arsip:</strong> Fisik, pencarian 15-30 menit/dokumen<br>
                         <strong>4. Kontrak:</strong> Monitoring manual, risiko expired tanpa peringatan`
            },
            {
                icon: '✅',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Fitur Utama (6 Kelompok)',
                content: `<strong>1. Surat Masuk:</strong> Registrasi otomatis, upload scan, disposisi<br>
                         <strong>2. Surat Keluar:</strong> Draft, approval, nomor otomatis, template<br>
                         <strong>3. Disposisi Digital:</strong> Instruksi, tracking, reminder, eskalasi<br>
                         <strong>4. Arsip Digital:</strong> Upload, kategorisasi, full-text search<br>
                         <strong>5. Manajemen Rapat:</strong> Jadwal, undangan, notulen, action items<br>
                         <strong>6. Kontrak & Legal:</strong> Data kontrak, alert expired, perizinan`
            },
            {
                icon: '👤',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Aktor Terlibat',
                content: `<strong>1. Sekretaris:</strong> Operator utama input & tracking<br>
                         <strong>2. Direksi:</strong> Approval & disposisi<br>
                         <strong>3. Manajer Unit:</strong> Penerima disposisi<br>
                         <strong>4. Legal/Hukum:</strong> Pengelola kontrak & perizinan<br>
                         <strong>5. Auditor:</strong> Pengawasan & audit trail`
            },
            {
                icon: '🔗',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Integrasi dengan Modul Lain',
                content: `<strong>Dashboard Top Mgmt:</strong> Statistik surat, kontrak expired<br>
                         <strong>Human Capital:</strong> Data user untuk disposisi<br>
                         <strong>Keuangan:</strong> Invoice & dokumen tagihan<br>
                         <strong>CACM:</strong> Audit trail & sampling transaksi`
            },
            {
                icon: '📊',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Target KPI',
                content: `<strong>Registrasi surat:</strong> < 2 menit<br>
                         <strong>Pencarian arsip:</strong> < 30 detik<br>
                         <strong>Disposisi diproses:</strong> < 24 jam<br>
                         <strong>Kontrak expired tanpa warning:</strong> 0%<br>
                         <strong>User adoption:</strong> > 90%`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Kesekretariatan',
        mermaid: `flowchart TB
subgraph SM["📬 SURAT MASUK"]
    direction TB
    SM1[Surat Masuk<br>Fisik/Email] --> SM2[Registrasi &<br>Scan Dokumen]
    SM2 --> SM3[Generate Nomor<br>SM-UNIT-YYYY-NNNN]
    SM3 --> SM4{Perlu<br>Disposisi?}
    SM4 -->|Ya| SM5[Kirim ke<br>Direksi]
    SM4 -->|Tidak| SM6[Arsip<br>Langsung]
end

subgraph DSP["✍️ DISPOSISI DIGITAL"]
    direction TB
    DSP1[Inbox Direksi] --> DSP2[Review &<br>Input Instruksi]
    DSP2 --> DSP3[Pilih Penerima<br>+ Set Deadline]
    DSP3 --> DSP4[Kirim Disposisi]
    DSP4 --> DSP5[Notifikasi<br>Penerima]
    DSP5 --> DSP6{Ditindaklanjuti?}
    DSP6 -->|Ya| DSP7[Update Status<br>Selesai]
    DSP6 -->|Tidak| DSP8[Reminder &<br>Eskalasi]
    DSP8 --> DSP6
end

subgraph SK["📤 SURAT KELUAR"]
    direction TB
    SK1[Draft Surat] --> SK2[Review<br>Atasan]
    SK2 --> SK3{Approved?}
    SK3 -->|Ya| SK4[Generate Nomor<br>NNNN/PPSU/UNIT/MM/YYYY]
    SK3 -->|Tidak| SK1
    SK4 --> SK5[Cetak &<br>TTD]
    SK5 --> SK6[Kirim &<br>Arsip]
end

subgraph KTR["📋 KONTRAK & LEGAL"]
    direction TB
    KTR1[Input Data<br>Kontrak] --> KTR2[Review<br>Legal]
    KTR2 --> KTR3[TTD &<br>Arsip]
    KTR3 --> KTR4[Monitoring<br>Masa Berlaku]
    KTR4 --> KTR5{H-30<br>Expired?}
    KTR5 -->|Ya| KTR6[🔔 Alert<br>Notifikasi]
    KTR5 -->|Tidak| KTR4
    KTR6 --> KTR7{Perpanjang?}
    KTR7 -->|Ya| KTR1
    KTR7 -->|Tidak| KTR8[Terminate]
end

SM5 --> DSP1
DSP7 --> SK1
SK6 --> ARSIP[(🗄️ ARSIP<br>DIGITAL)]
SM6 --> ARSIP
KTR3 --> ARSIP

style SM fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style DSP fill:#dcfce7,stroke:#22c55e,color:#166534
style SK fill:#fef3c7,stroke:#f59e0b,color:#78350f
style KTR fill:#fce7f3,stroke:#ec4899,color:#831843
style ARSIP fill:#e0e7ff,stroke:#6366f1,color:#3730a3`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem Kesekretariatan',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard Sekretariat -->
                <div class="prototype-mockup">
                    <div class="mockup-header">
                        <span class="mockup-title">📊 Dashboard Kesekretariatan</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 1.75rem; font-weight: 700;">12</div>
                                <div style="font-size: 0.75rem; opacity: 0.9;">Surat Masuk Hari Ini</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 1.75rem; font-weight: 700;">8</div>
                                <div style="font-size: 0.75rem; opacity: 0.9;">Surat Keluar Hari Ini</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 1.75rem; font-weight: 700;">5</div>
                                <div style="font-size: 0.75rem; opacity: 0.9;">Disposisi Pending</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 1.75rem; font-weight: 700;">3</div>
                                <div style="font-size: 0.75rem; opacity: 0.9;">Kontrak Akan Expired</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Registrasi Surat Masuk -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">📬 Registrasi Surat Masuk</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">+ Baru</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <div style="background: #ecfdf5; border: 1px solid #10b981; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.85rem;">
                            📋 <strong>Nomor Registrasi:</strong> SM-TRN-2026-0025 (Auto-generated)
                        </div>
                        
                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Tanggal Terima *</label>
                                <input type="date" class="mockup-input" value="2026-01-17">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Asal Surat *</label>
                                <input type="text" class="mockup-input" placeholder="Nama instansi/perusahaan pengirim">
                            </div>
                        </div>

                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Nomor Surat Asal</label>
                                <input type="text" class="mockup-input" placeholder="Nomor surat dari pengirim">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Tanggal Surat *</label>
                                <input type="date" class="mockup-input" value="2026-01-15">
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Perihal *</label>
                            <input type="text" class="mockup-input" placeholder="Subjek/perihal surat">
                        </div>

                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Klasifikasi *</label>
                                <select class="mockup-select">
                                    <option>-- Pilih Klasifikasi --</option>
                                    <option>Umum</option>
                                    <option>Keuangan</option>
                                    <option>Kepegawaian</option>
                                    <option>Operasional</option>
                                    <option>Legal</option>
                                </select>
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Sifat *</label>
                                <select class="mockup-select">
                                    <option>Biasa</option>
                                    <option>Penting</option>
                                    <option>Rahasia</option>
                                    <option>Sangat Rahasia</option>
                                </select>
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Upload Scan Surat</label>
                            <div style="border: 2px dashed #cbd5e1; border-radius: 8px; padding: 2rem; text-align: center; background: #f8fafc;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📎</div>
                                <div style="color: #64748b; font-size: 0.9rem;">Drag & drop file atau <span style="color: #3b82f6; cursor: pointer;">browse</span></div>
                                <div style="color: #94a3b8; font-size: 0.75rem; margin-top: 0.25rem;">PDF, JPG, PNG (Max 10MB)</div>
                            </div>
                        </div>

                        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                            <button class="mockup-submit" style="flex: 1;">💾 Simpan & Arsip</button>
                            <button class="mockup-submit" style="flex: 1; background: #22c55e;">✍️ Simpan & Disposisi</button>
                        </div>
                    </div>
                </div>

                <!-- Panel Disposisi -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">✍️ Panel Disposisi Direksi</span>
                    </div>
                    <div class="mockup-content">
                        <div style="background: #f0fdf4; border: 1px solid #22c55e; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">📄 Surat: SM-TRN-2026-0025</div>
                            <div style="font-size: 0.85rem; color: #64748b;">
                                <strong>Perihal:</strong> Permohonan Kerjasama Operasional Kapal<br>
                                <strong>Dari:</strong> PT Pelindo I (Persero)<br>
                                <strong>Tanggal:</strong> 15 Januari 2026
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Instruksi Disposisi *</label>
                            <textarea class="mockup-textarea" placeholder="Tuliskan instruksi untuk penerima disposisi..." style="min-height: 80px;">Mohon ditindaklanjuti dengan mengagendakan rapat koordinasi bersama tim operasional.</textarea>
                        </div>

                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Disposisi Kepada *</label>
                                <select class="mockup-select" multiple style="height: 100px;">
                                    <option selected>📁 Manajer Unit Transportasi</option>
                                    <option>📁 Manajer Keuangan</option>
                                    <option>📁 Manajer SDM</option>
                                    <option selected>📁 Sekretaris</option>
                                </select>
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Deadline Tindak Lanjut</label>
                                <input type="date" class="mockup-input" value="2026-01-24">
                                <div style="font-size: 0.75rem; color: #64748b; margin-top: 0.25rem;">⚠️ Reminder otomatis H-1</div>
                            </div>
                        </div>

                        <button class="mockup-submit" style="background: #22c55e;">📤 Kirim Disposisi</button>
                    </div>
                </div>

                <!-- Daftar Surat -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">📋 Daftar Surat Masuk</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">🔍 Filter</button>
                            <button class="mockup-btn">📥 Export</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>No. Registrasi</th>
                                    <th>Tanggal</th>
                                    <th>Asal</th>
                                    <th>Perihal</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-weight: 500;">SM-TRN-2026-0025</td>
                                    <td>17/01/2026</td>
                                    <td>PT Pelindo I</td>
                                    <td>Permohonan Kerjasama...</td>
                                    <td><span class="mockup-status pending">⏳ Menunggu Disposisi</span></td>
                                    <td><button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; cursor: pointer;">Lihat</button></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500;">SM-DIR-2026-0024</td>
                                    <td>16/01/2026</td>
                                    <td>Pemprov SUMUT</td>
                                    <td>Undangan Rapat Koordinasi...</td>
                                    <td><span class="mockup-status approved">✅ Selesai</span></td>
                                    <td><button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; cursor: pointer;">Lihat</button></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500;">SM-KEU-2026-0023</td>
                                    <td>15/01/2026</td>
                                    <td>Bank Sumut</td>
                                    <td>Laporan Rekening Koran...</td>
                                    <td><span class="mockup-status" style="background: #dbeafe; color: #1d4ed8;">🔄 Dalam Proses</span></td>
                                    <td><button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; cursor: pointer;">Lihat</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Monitoring Kontrak -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
                        <span class="mockup-title">📋 Monitoring Kontrak & Perizinan</span>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>No. Kontrak</th>
                                    <th>Judul</th>
                                    <th>Pihak Kedua</th>
                                    <th>Nilai</th>
                                    <th>Berakhir</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td style="font-weight: 500;">KTR-2024-018</td>
                                    <td>Sewa Kapal Penyeberangan</td>
                                    <td>PT Maritim Jaya</td>
                                    <td>Rp 450.000.000</td>
                                    <td>25/01/2026</td>
                                    <td><span class="mockup-status rejected">🔴 Expired dalam 8 hari</span></td>
                                </tr>
                                <tr style="background: #fefce8;">
                                    <td style="font-weight: 500;">KTR-2025-003</td>
                                    <td>Maintenance Gedung PRSU</td>
                                    <td>CV Karya Mandiri</td>
                                    <td>Rp 175.000.000</td>
                                    <td>15/02/2026</td>
                                    <td><span class="mockup-status pending">🟡 Expired dalam 29 hari</span></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500;">KTR-2025-012</td>
                                    <td>Kerjasama Ticketing Online</td>
                                    <td>PT Tokopedia</td>
                                    <td>Revenue Share</td>
                                    <td>31/12/2026</td>
                                    <td><span class="mockup-status approved">🟢 Aktif</span></td>
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
window.ppsuModules.push(modul_kesekretariatan);
