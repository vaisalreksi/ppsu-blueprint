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
            },
            {
                icon: '📅',
                iconBg: 'rgba(236, 72, 153, 0.1)',
                iconColor: '#ec4899',
                title: 'Manajemen Rapat (NEW)',
                content: `<strong>📅 Jadwal:</strong> Kalender rapat, booking ruangan<br>
                         <strong>📨 Undangan:</strong> Generate undangan, konfirmasi hadir<br>
                         <strong>📝 Notulen:</strong> Template, upload hasil rapat<br>
                         <strong>☑️ Action Items:</strong> Assign tugas, deadline, tracking<br>
                         <strong>📈 Follow-up:</strong> Reminder, status progress<br>
                         <strong>🔗 Integrasi:</strong> Link ke disposisi & arsip`
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
    SM1[Surat Masuk] --> SM2[Registrasi &<br>Scan]
    SM2 --> SM3[Generate<br>Nomor]
    SM3 --> SM4{Perlu<br>Disposisi?}
    SM4 -->|Ya| SM5[Kirim ke<br>Direksi]
    SM4 -->|Tidak| SM6[Arsip]
end

subgraph DSP["✍️ DISPOSISI"]
    direction TB
    DSP1[Inbox] --> DSP2[Review &<br>Instruksi]
    DSP2 --> DSP3[Set Penerima<br>& Deadline]
    DSP3 --> DSP4[Kirim]
    DSP4 --> DSP5{Done?}
    DSP5 -->|Ya| DSP6[✅ Selesai]
    DSP5 -->|Tidak| DSP7[⚠️ Reminder]
    DSP7 --> DSP5
end

subgraph RAPAT["📅 MANAJEMEN RAPAT"]
    direction TB
    R1[📅 Jadwal<br>Rapat] --> R2[🏢 Booking<br>Ruangan]
    R2 --> R3[📨 Generate<br>Undangan]
    R3 --> R4[RSVP<br>Konfirmasi]
    R4 --> R5[🎯 Rapat<br>Berlangsung]
    R5 --> R6[📝 Input<br>Notulen]
    R6 --> R7[☑️ Action<br>Items]
    R7 --> R8{Status?}
    R8 -->|Done| R9[✅ Verified]
    R8 -->|Pending| R10[🔔 Reminder]
    R10 --> R8
end

subgraph SK["📤 SURAT KELUAR"]
    direction TB
    SK1[Draft] --> SK2[Review]
    SK2 --> SK3{OK?}
    SK3 -->|Ya| SK4[Nomor]
    SK3 -->|Tidak| SK1
    SK4 --> SK5[Kirim]
end

subgraph KTR["📋 KONTRAK"]
    direction TB
    KTR1[Input] --> KTR2[Review Legal]
    KTR2 --> KTR3[TTD & Arsip]
    KTR3 --> KTR4{H-30?}
    KTR4 -->|Ya| KTR5[🔔 Alert]
    KTR4 -->|Tidak| KTR4
end

SM5 --> DSP1
DSP6 --> SK1
SK5 --> ARSIP[(🗄️ ARSIP)]
SM6 --> ARSIP
KTR3 --> ARSIP
R6 --> ARSIP
R7 --> DSP1

style SM fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style DSP fill:#dcfce7,stroke:#22c55e,color:#166534
style RAPAT fill:#fce7f3,stroke:#ec4899,color:#831843
style SK fill:#fef3c7,stroke:#f59e0b,color:#78350f
style KTR fill:#f3e8ff,stroke:#a855f7,color:#581c87
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

                <!-- Kalender Rapat -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                        <span class="mockup-title">📅 Kalender Rapat</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #7c3aed;">+ Jadwalkan Rapat</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Calendar Header -->
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <button style="background: #f1f5f9; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">← Sebelumnya</button>
                            <div style="font-weight: 600; font-size: 1.1rem;">📅 Januari 2026</div>
                            <button style="background: #f1f5f9; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">Berikutnya →</button>
                        </div>

                        <!-- Mini Calendar Week View -->
                        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; text-align: center; margin-bottom: 1rem;">
                            <div style="font-weight: 600; color: #64748b; font-size: 0.75rem;">SEN</div>
                            <div style="font-weight: 600; color: #64748b; font-size: 0.75rem;">SEL</div>
                            <div style="font-weight: 600; color: #64748b; font-size: 0.75rem;">RAB</div>
                            <div style="font-weight: 600; color: #64748b; font-size: 0.75rem;">KAM</div>
                            <div style="font-weight: 600; color: #64748b; font-size: 0.75rem;">JUM</div>
                            <div style="font-weight: 600; color: #64748b; font-size: 0.75rem;">SAB</div>
                            <div style="font-weight: 600; color: #64748b; font-size: 0.75rem;">MIN</div>
                            
                            <div style="padding: 0.5rem; border-radius: 6px;">19</div>
                            <div style="padding: 0.5rem; border-radius: 6px; background: #8b5cf6; color: white; font-weight: 600;">20</div>
                            <div style="padding: 0.5rem; border-radius: 6px;">21</div>
                            <div style="padding: 0.5rem; border-radius: 6px; background: #fef3c7;">22</div>
                            <div style="padding: 0.5rem; border-radius: 6px;">23</div>
                            <div style="padding: 0.5rem; border-radius: 6px; background: #dcfce7;">24</div>
                            <div style="padding: 0.5rem; border-radius: 6px;">25</div>
                        </div>

                        <!-- Today's Meetings -->
                        <div style="font-weight: 600; margin-bottom: 0.75rem;">📌 Rapat Hari Ini (19 Jan 2026)</div>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 0 8px 8px 0;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <div style="font-weight: 600;">🗣️ Rapat Koordinasi Direksi</div>
                                        <div style="font-size: 0.8rem; color: #64748b;">🕒 09:00 - 11:00 | 📍 Ruang Rapat Utama | 👥 8 peserta</div>
                                    </div>
                                    <div style="display: flex; gap: 0.5rem;">
                                        <span style="background: #22c55e; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Berlangsung</span>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Detail</button>
                                    </div>
                                </div>
                            </div>
                            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0 8px 8px 0;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <div style="font-weight: 600;">💼 Review Proyek Infrastruktur</div>
                                        <div style="font-size: 0.8rem; color: #64748b;">🕒 14:00 - 16:00 | 📍 Ruang Meeting B | 👥 12 peserta</div>
                                    </div>
                                    <div style="display: flex; gap: 0.5rem;">
                                        <span style="background: #f59e0b; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Upcoming</span>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Detail</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Upcoming This Week -->
                        <div style="font-weight: 600; margin: 1rem 0 0.75rem;">📆 Jadwal Minggu Ini</div>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; font-size: 0.85rem;">
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px;">
                                <div style="font-weight: 600;">20 Jan - Sel</div>
                                <div style="color: #64748b;">09:00 - Rapat Keuangan Bulanan</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px;">
                                <div style="font-weight: 600;">22 Jan - Kam</div>
                                <div style="color: #64748b;">10:00 - Review Kontrak Vendor</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px;">
                                <div style="font-weight: 600;">24 Jan - Sab</div>
                                <div style="color: #64748b;">14:00 - Town Hall Meeting</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Jadwal Rapat -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
                        <span class="mockup-title">✍️ Jadwalkan Rapat Baru</span>
                    </div>
                    <div class="mockup-content">
                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Judul Rapat *</label>
                                <input type="text" class="mockup-input" placeholder="Nama/judul rapat">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Jenis Rapat *</label>
                                <select class="mockup-select">
                                    <option>🗣️ Rapat Koordinasi</option>
                                    <option>💼 Rapat Proyek</option>
                                    <option>📊 Rapat Review</option>
                                    <option>🎓 Training/Workshop</option>
                                    <option>🎯 Town Hall</option>
                                </select>
                            </div>
                        </div>

                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Tanggal *</label>
                                <input type="date" class="mockup-input" value="2026-01-22">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Waktu *</label>
                                <div style="display: flex; gap: 0.5rem; align-items: center;">
                                    <input type="time" class="mockup-input" value="09:00" style="flex: 1;">
                                    <span>-</span>
                                    <input type="time" class="mockup-input" value="11:00" style="flex: 1;">
                                </div>
                            </div>
                        </div>

                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Ruangan *</label>
                                <select class="mockup-select">
                                    <option>🏢 Ruang Rapat Utama (30 org)</option>
                                    <option>🏢 Ruang Meeting A (15 org)</option>
                                    <option>🏢 Ruang Meeting B (10 org)</option>
                                    <option>💻 Virtual (Zoom/Teams)</option>
                                </select>
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Pimpinan Rapat</label>
                                <select class="mockup-select">
                                    <option>Direktur Utama</option>
                                    <option>Direktur Operasional</option>
                                    <option>Direktur Keuangan</option>
                                </select>
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Peserta Rapat *</label>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 8px; min-height: 60px;">
                                <span style="background: #dbeafe; color: #1d4ed8; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; display: flex; align-items: center; gap: 0.25rem;">👤 Manajer Keuangan <button style="background: none; border: none; cursor: pointer;">×</button></span>
                                <span style="background: #dbeafe; color: #1d4ed8; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; display: flex; align-items: center; gap: 0.25rem;">👤 Manajer Operasional <button style="background: none; border: none; cursor: pointer;">×</button></span>
                                <span style="background: #dbeafe; color: #1d4ed8; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; display: flex; align-items: center; gap: 0.25rem;">👤 Manajer HC <button style="background: none; border: none; cursor: pointer;">×</button></span>
                                <span style="background: #f1f5f9; color: #64748b; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; cursor: pointer;">+ Tambah</span>
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Agenda Rapat</label>
                            <textarea class="mockup-textarea" placeholder="1. Pembukaan&#10;2. Pembahasan...&#10;3. Penutup" style="min-height: 80px;"></textarea>
                        </div>

                        <div style="display: flex; gap: 0.5rem;">
                            <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;"><input type="checkbox" checked> Kirim undangan via email</label>
                            <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;"><input type="checkbox"> Reminder H-1</label>
                            <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;"><input type="checkbox"> Reminder H-0 (1 jam sebelum)</label>
                        </div>

                        <button class="mockup-submit" style="background: #ec4899; margin-top: 1rem;">📅 Buat Jadwal & Kirim Undangan</button>
                    </div>
                </div>

                <!-- Notulen Rapat -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);">
                        <span class="mockup-title">📝 Notulen Rapat</span>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Rapat Koordinasi Direksi - 19 Jan 2026</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Meeting Info -->
                        <div style="background: #f0f9ff; border: 1px solid #0ea5e9; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; font-size: 0.85rem;">
                                <div><strong>Tanggal:</strong> 19 Januari 2026</div>
                                <div><strong>Waktu:</strong> 09:00 - 11:00 WIB</div>
                                <div><strong>Tempat:</strong> Ruang Rapat Utama</div>
                                <div><strong>Pimpinan:</strong> Direktur Utama</div>
                            </div>
                        </div>

                        <!-- Attendance -->
                        <div style="margin-bottom: 1rem;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">👥 Kehadiran Peserta</div>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                <span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">✅ Direktur Utama</span>
                                <span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">✅ Direktur Operasional</span>
                                <span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">✅ Manajer Keuangan</span>
                                <span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">✅ Manajer Operasional</span>
                                <span style="background: #fef2f2; color: #991b1b; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">❌ Manajer HC (Izin)</span>
                            </div>
                        </div>

                        <!-- Notulen Content -->
                        <div class="mockup-form-group">
                            <label class="mockup-label">Hasil Pembahasan</label>
                            <textarea class="mockup-textarea" style="min-height: 120px;">1. Pembukaan oleh Direktur Utama
2. Laporan progress proyek infrastruktur - SPI saat ini 0.92
3. Pembahasan kendala pengadaan material
4. Review performa transportasi Q4 2025
5. Rencana ekspansi rute baru
6. Penutup dan doa</textarea>
                        </div>

                        <!-- Action Items -->
                        <div style="margin-top: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                                <div style="font-weight: 600;">☑️ Action Items</div>
                                <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.75rem; cursor: pointer;">+ Tambah</button>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <div style="font-weight: 500;">Follow-up vendor material ke-3</div>
                                        <div style="font-size: 0.75rem; color: #64748b;">👤 Manajer Operasional | 📅 Deadline: 22 Jan 2026</div>
                                    </div>
                                    <span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟡 In Progress</span>
                                </div>
                                <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <div style="font-weight: 500;">Siapkan proposal rute baru</div>
                                        <div style="font-size: 0.75rem; color: #64748b;">👤 Manajer Transportasi | 📅 Deadline: 31 Jan 2026</div>
                                    </div>
                                    <span style="background: #dbeafe; color: #1d4ed8; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟢 Open</span>
                                </div>
                                <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <div style="font-weight: 500;">Update laporan keuangan Q4</div>
                                        <div style="font-size: 0.75rem; color: #64748b;">👤 Manajer Keuangan | 📅 Deadline: 20 Jan 2026</div>
                                    </div>
                                    <span style="background: #22c55e; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">✅ Done</span>
                                </div>
                            </div>
                        </div>

                        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                            <button class="mockup-submit" style="flex: 1;">💾 Simpan Notulen</button>
                            <button class="mockup-submit" style="flex: 1; background: #8b5cf6;">📤 Kirim ke Peserta</button>
                            <button class="mockup-submit" style="flex: 1; background: #64748b;">📄 Export PDF</button>
                        </div>
                    </div>
                </div>

                <!-- Action Items Tracker -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">📊 Tracking Action Items</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Summary Cards -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #dbeafe; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #1d4ed8;">8</div>
                                <div style="font-size: 0.7rem; color: #1d4ed8;">Open</div>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #92400e;">5</div>
                                <div style="font-size: 0.7rem; color: #92400e;">In Progress</div>
                            </div>
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #166534;">23</div>
                                <div style="font-size: 0.7rem; color: #166534;">Done</div>
                            </div>
                            <div style="background: #fef2f2; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #991b1b;">2</div>
                                <div style="font-size: 0.7rem; color: #991b1b;">Overdue</div>
                            </div>
                        </div>

                        <!-- Action Items Table -->
                        <table class="mockup-table" style="font-size: 0.85rem;">
                            <thead>
                                <tr>
                                    <th>Action Item</th>
                                    <th>Dari Rapat</th>
                                    <th>PIC</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td>Kirim laporan progress ke Pemprov</td>
                                    <td>Rakor 15 Jan</td>
                                    <td>Sekretaris</td>
                                    <td style="color: #ef4444; font-weight: 600;">17 Jan 🔴</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Overdue</span></td>
                                </tr>
                                <tr>
                                    <td>Follow-up vendor material ke-3</td>
                                    <td>Rakor 19 Jan</td>
                                    <td>Mgr Operasional</td>
                                    <td>22 Jan</td>
                                    <td><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">In Progress</span></td>
                                </tr>
                                <tr>
                                    <td>Siapkan proposal rute baru</td>
                                    <td>Rakor 19 Jan</td>
                                    <td>Mgr Transport</td>
                                    <td>31 Jan</td>
                                    <td><span style="background: #3b82f6; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Open</span></td>
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
