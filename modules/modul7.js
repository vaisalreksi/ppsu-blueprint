// ============================================
// MODUL 7 - SISTEM OPERASIONAL PRSU
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_prsu = {
    id: 'modul_prsu',
    title: 'Modul 7 - Sistem Operasional PRSU',
    subtitle: 'Booking Venue, Approval Berjenjang, Kalender Visual & Integrasi Keuangan',
    icon: '🏛️',
    menuTitle: 'Operasional PRSU',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem Operasional PRSU',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Membangun sistem manajemen venue terintegrasi dengan booking online, 
                         approval workflow berjenjang berdasarkan nilai & jenis event, 
                         kalender visual dengan indikator warna, dan integrasi pembayaran ke Keuangan.`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Booking:</strong> Manual via telepon/WA, risiko double booking<br>
                         <strong>2. Jadwal:</strong> Excel/kertas, tidak real-time<br>
                         <strong>3. Approval:</strong> Verbal, tidak ada audit trail<br>
                         <strong>4. Pembayaran:</strong> Terpisah dari sistem<br>
                         <strong>5. Kontrak:</strong> File terpisah, sulit tracking`
            },
            {
                icon: '✅',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Fitur Utama',
                content: `<strong>1. Venue:</strong> Data gedung, zona, fasilitas<br>
                         <strong>2. Booking:</strong> Online, estimasi otomatis<br>
                         <strong>3. Approval:</strong> 3 level berdasarkan nilai<br>
                         <strong>4. Kalender:</strong> Visual dengan warna status<br>
                         <strong>5. Kontrak:</strong> Generate & tracking<br>
                         <strong>6. Payment:</strong> DP, pelunasan, AR tracking`
            },
            {
                icon: '📋',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Approval Workflow Berjenjang',
                content: `<strong>< Rp 25 jt:</strong> Staff Senior → Manajer PRSU<br>
                         <strong>Rp 25-100 jt:</strong> Manajer → Kadiv Operasional<br>
                         <strong>> Rp 100 jt:</strong> Manajer → Kadiv → Direktur Ops<br>
                         <strong>Event VIP:</strong> Manajer → Dir. Ops → Dirut`
            },
            {
                icon: '📅',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Indikator Warna Kalender',
                content: `🟢 <strong>Hijau:</strong> Available (tersedia)<br>
                         🟡 <strong>Kuning:</strong> Hold/Pending Approval<br>
                         🟠 <strong>Oranye:</strong> Partially Booked<br>
                         🔴 <strong>Merah:</strong> Fully Booked<br>
                         🔵 <strong>Biru:</strong> Confirmed & Paid<br>
                         ⚫ <strong>Abu:</strong> Blackout (maintenance)`
            },
            {
                icon: '💰',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Integrasi Keuangan',
                content: `<strong>Approved:</strong> → Create AR Invoice<br>
                         <strong>DP:</strong> → Jurnal Bank → Uang Muka<br>
                         <strong>Pelunasan:</strong> → Jurnal Pendapatan Sewa<br>
                         <strong>Overdue:</strong> → Alert + reminder otomatis`
            },
            {
                icon: '🤖',
                iconBg: 'rgba(168, 85, 247, 0.1)',
                iconColor: '#a855f7',
                title: 'AI Solutions (Low Demand)',
                content: `<strong>📊 Demand Forecast:</strong> Prediksi okupansi 30-90 hari<br>
                         <strong>💲 Dynamic Pricing:</strong> Harga otomatis sesuai demand<br>
                         <strong>🎯 AI Recommendations:</strong> Strategi marketing otomatis<br>
                         <strong>🎁 Promo Generator:</strong> Early bird, last minute, bundle<br>
                         <strong>📧 Auto Marketing:</strong> Email blast jika low demand`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Operasional PRSU',
        mermaid: `flowchart LR

%% ===================== ALUR BOOKING =====================
subgraph BOOKING["📝 ALUR BOOKING"]
    direction TB
    B1[Customer<br>Request] --> B2[Cek<br>Ketersediaan]
    B2 --> B3{Available?}
    B3 -->|Ya| B4[Submit<br>Booking]
    B3 -->|Tidak| B5[Pilih Tanggal<br>Lain]
    B4 --> B6[Generate<br>Estimasi]
    B6 --> B7[PENDING<br>APPROVAL]
end

%% ===================== APPROVAL =====================
subgraph APPROVAL["✅ APPROVAL BERJENJANG"]
    direction TB
    A1[Level 1<br>Staff / Manajer] --> A2{Approve?}
    A2 -->|Ya| A3{Level 2<br>Required?}
    A2 -->|Tidak| A4[❌ REJECTED]

    A3 -->|Ya| A5[Level 2<br>Kadiv]
    A3 -->|Tidak| A8[✅ APPROVED]

    A5 --> A6{Approve?}
    A6 -->|Ya| A7{Level 3<br>Required?}
    A6 -->|Tidak| A4

    A7 -->|Ya| A9[Level 3<br>Direktur]
    A7 -->|Tidak| A8

    A9 --> A10{Approve?}
    A10 -->|Ya| A8
    A10 -->|Tidak| A4
end

%% ===================== PAYMENT =====================
subgraph PAYMENT["💰 PEMBAYARAN"]
    direction TB
    P1[Generate<br>Invoice] --> P2[Send to<br>Customer]
    P2 --> P3[Pembayaran<br>DP 50%]
    P3 --> P4[Jurnal<br>Keuangan]
    P4 --> P5[Event<br>Executed]
    P5 --> P6[Pelunasan<br>50%]
    P6 --> P7[Jurnal<br>Pendapatan]
end

%% ===================== NODE EKSTERNAL =====================
KEU[(💰 MODUL<br>KEUANGAN)]

%% ===================== ALUR ANTAR SUBGRAPH =====================
B7 --> A1
A8 --> P1
P7 --> KEU

%% ===================== STYLING =====================
style BOOKING fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style APPROVAL fill:#dcfce7,stroke:#22c55e,color:#166534
style PAYMENT fill:#f3e8ff,stroke:#a855f7,color:#581c87
style KEU fill:#fce7f3,stroke:#ec4899,color:#831843`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem Operasional PRSU',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard PRSU -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);">
                        <span class="mockup-title">🏛️ Dashboard PRSU</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Booking Bulan Ini</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">24</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Rp 2.4 M</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Pending Approval</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">5</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Menunggu</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Okupansi</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">68%</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Target 60%</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">AR Outstanding</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">Rp 450 Jt</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">3 overdue</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kalender Visual -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);">
                        <span class="mockup-title">📅 Kalender Booking - Januari 2026</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #0284c7;">◀ Prev</button>
                            <button class="mockup-btn" style="background: white; color: #0284c7;">Next ▶</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Legend -->
                        <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap; font-size: 0.75rem;">
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #22c55e; border-radius: 4px;"></div>
                                <span>Available</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #eab308; border-radius: 4px;"></div>
                                <span>Pending</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #f97316; border-radius: 4px;"></div>
                                <span>Partial</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #ef4444; border-radius: 4px;"></div>
                                <span>Full</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #3b82f6; border-radius: 4px;"></div>
                                <span>Confirmed</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #94a3b8; border-radius: 4px;"></div>
                                <span>Blackout</span>
                            </div>
                        </div>

                        <!-- Calendar Grid -->
                        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center;">
                            <div style="font-weight: 600; padding: 0.5rem; color: #64748b;">Min</div>
                            <div style="font-weight: 600; padding: 0.5rem; color: #64748b;">Sen</div>
                            <div style="font-weight: 600; padding: 0.5rem; color: #64748b;">Sel</div>
                            <div style="font-weight: 600; padding: 0.5rem; color: #64748b;">Rab</div>
                            <div style="font-weight: 600; padding: 0.5rem; color: #64748b;">Kam</div>
                            <div style="font-weight: 600; padding: 0.5rem; color: #64748b;">Jum</div>
                            <div style="font-weight: 600; padding: 0.5rem; color: #64748b;">Sab</div>
                            
                            <!-- Week 1 -->
                            <div style="padding: 0.5rem; background: #f1f5f9; border-radius: 6px; color: #94a3b8;"></div>
                            <div style="padding: 0.5rem; background: #f1f5f9; border-radius: 6px; color: #94a3b8;"></div>
                            <div style="padding: 0.5rem; background: #f1f5f9; border-radius: 6px; color: #94a3b8;"></div>
                            <div style="padding: 0.5rem; background: #94a3b8; border-radius: 6px; color: white;">1</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">2</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">3</div>
                            <div style="padding: 0.5rem; background: #3b82f6; border-radius: 6px; color: white; cursor: pointer;">4<div style="font-size: 0.5rem;">Wedding</div></div>
                            
                            <!-- Week 2 -->
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">5</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">6</div>
                            <div style="padding: 0.5rem; background: #eab308; border-radius: 6px; color: white; cursor: pointer;">7<div style="font-size: 0.5rem;">Pending</div></div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">8</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">9</div>
                            <div style="padding: 0.5rem; background: #f97316; border-radius: 6px; color: white; cursor: pointer;">10<div style="font-size: 0.5rem;">Partial</div></div>
                            <div style="padding: 0.5rem; background: #ef4444; border-radius: 6px; color: white; cursor: pointer;">11<div style="font-size: 0.5rem;">Expo</div></div>
                            
                            <!-- Week 3 -->
                            <div style="padding: 0.5rem; background: #ef4444; border-radius: 6px; color: white; cursor: pointer;">12<div style="font-size: 0.5rem;">Expo</div></div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">13</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">14</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">15</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">16</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">17</div>
                            <div style="padding: 0.5rem; background: #3b82f6; border-radius: 6px; color: white; cursor: pointer; border: 2px solid #1d4ed8;">18<div style="font-size: 0.5rem;">Today</div></div>
                            
                            <!-- Week 4 -->
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">19</div>
                            <div style="padding: 0.5rem; background: #eab308; border-radius: 6px; color: white; cursor: pointer;">20<div style="font-size: 0.5rem;">Pending</div></div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">21</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">22</div>
                            <div style="padding: 0.5rem; background: #22c55e; border-radius: 6px; color: white; cursor: pointer;">23</div>
                            <div style="padding: 0.5rem; background: #3b82f6; border-radius: 6px; color: white; cursor: pointer;">24<div style="font-size: 0.5rem;">Seminar</div></div>
                            <div style="padding: 0.5rem; background: #3b82f6; border-radius: 6px; color: white; cursor: pointer;">25<div style="font-size: 0.5rem;">Seminar</div></div>
                        </div>
                    </div>
                </div>

                <!-- Pending Approvals -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <span class="mockup-title">⏳ Pending Approvals</span>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>No. Booking</th>
                                    <th>Event</th>
                                    <th>Tanggal</th>
                                    <th>Nilai</th>
                                    <th>Level</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-weight: 500; font-family: monospace;">PRB-2026-0045</td>
                                    <td>Wedding Reception - PT ABC</td>
                                    <td>7 Jan 2026</td>
                                    <td>Rp 85.000.000</td>
                                    <td>
                                        <div style="display: flex; gap: 0.25rem;">
                                            <span style="background: #22c55e; color: white; padding: 0.125rem 0.375rem; border-radius: 4px; font-size: 0.7rem;">L1 ✓</span>
                                            <span style="background: #f59e0b; color: white; padding: 0.125rem 0.375rem; border-radius: 4px; font-size: 0.7rem;">L2 ⏳</span>
                                        </div>
                                    </td>
                                    <td>
                                        <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer; margin-right: 0.25rem;">✓</button>
                                        <button style="background: #ef4444; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">✗</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500; font-family: monospace;">PRB-2026-0048</td>
                                    <td>Pameran Otomotif 2026</td>
                                    <td>20 Jan 2026</td>
                                    <td>Rp 250.000.000</td>
                                    <td>
                                        <div style="display: flex; gap: 0.25rem;">
                                            <span style="background: #22c55e; color: white; padding: 0.125rem 0.375rem; border-radius: 4px; font-size: 0.7rem;">L1 ✓</span>
                                            <span style="background: #22c55e; color: white; padding: 0.125rem 0.375rem; border-radius: 4px; font-size: 0.7rem;">L2 ✓</span>
                                            <span style="background: #f59e0b; color: white; padding: 0.125rem 0.375rem; border-radius: 4px; font-size: 0.7rem;">L3 ⏳</span>
                                        </div>
                                    </td>
                                    <td>
                                        <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer; margin-right: 0.25rem;">✓</button>
                                        <button style="background: #ef4444; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">✗</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Form Booking -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">📝 Form Booking Venue</span>
                    </div>
                    <div class="mockup-content">
                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Nama Event *</label>
                                <input type="text" class="mockup-input" placeholder="Contoh: Wedding Reception">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Jenis Event *</label>
                                <select class="mockup-select">
                                    <option>Wedding & Celebration</option>
                                    <option>Pameran & Exhibition</option>
                                    <option>Seminar & Konferensi</option>
                                    <option>Konser & Pertunjukan</option>
                                    <option>Event Pemerintah</option>
                                </select>
                            </div>
                        </div>

                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Tanggal Mulai *</label>
                                <input type="date" class="mockup-input" value="2026-01-20">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Tanggal Selesai *</label>
                                <input type="date" class="mockup-input" value="2026-01-21">
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Venue/Zona *</label>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-top: 0.5rem;">
                                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; background: #dbeafe; border: 2px solid #3b82f6; border-radius: 8px; cursor: pointer;">
                                    <input type="checkbox" checked> 🏟️ Hall Utama
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; cursor: pointer;">
                                    <input type="checkbox"> 🎭 Hall Eksibisi A
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; cursor: pointer;">
                                    <input type="checkbox"> 🅿️ Parkir VIP
                                </label>
                            </div>
                        </div>

                        <!-- Estimasi Biaya -->
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">💰 Estimasi Biaya:</div>
                            <table style="width: 100%; font-size: 0.85rem;">
                                <tr><td>Sewa Hall Utama (2 hari)</td><td style="text-align: right;">Rp 100.000.000</td></tr>
                                <tr><td>Sound System</td><td style="text-align: right;">Rp 15.000.000</td></tr>
                                <tr><td>Lighting</td><td style="text-align: right;">Rp 10.000.000</td></tr>
                                <tr style="font-weight: 600; border-top: 1px solid #e2e8f0;">
                                    <td>TOTAL ESTIMASI</td>
                                    <td style="text-align: right; color: #22c55e;">Rp 125.000.000</td>
                                </tr>
                            </table>
                        </div>

                        <!-- Approval Preview -->
                        <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.85rem;">
                            ℹ️ <strong>Approval Required:</strong> Level 1 (Manajer PRSU) → Level 2 (Kadiv Operasional) → Level 3 (Direktur Ops)
                        </div>

                        <button class="mockup-submit" style="width: 100%;">📤 Submit Booking Request</button>
                    </div>
                </div>

                <!-- AI Demand Optimization -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);">
                        <span class="mockup-title">🤖 AI Demand Optimization</span>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Auto-Insights</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Low Demand Alert -->
                        <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); border: 2px solid #f59e0b; padding: 1rem; border-radius: 12px; margin-bottom: 1rem;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 1.5rem;">⚠️</span>
                                <strong style="color: #92400e;">AI Alert: Low Demand Detected!</strong>
                            </div>
                            <div style="font-size: 0.85rem; color: #78350f;">
                                Okupansi 30 hari ke depan diprediksi hanya <strong>35%</strong>. AI merekomendasikan aktivasi promo.
                            </div>
                        </div>

                        <!-- Dynamic Pricing Cards -->
                        <div style="margin-bottom: 1rem;">
                            <div style="font-weight: 600; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span>💲</span> Dynamic Pricing Recommendations
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;">
                                <div style="background: #fef2f2; border: 2px solid #ef4444; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                    <div style="font-size: 0.7rem; color: #991b1b;">🔴 Very Low Period</div>
                                    <div style="font-size: 0.65rem; color: #64748b;">Feb 1-15</div>
                                    <div style="font-size: 1.25rem; font-weight: 700; color: #ef4444;">-40%</div>
                                    <div style="font-size: 0.65rem;">Rp 30 jt/hari</div>
                                </div>
                                <div style="background: #fff7ed; border: 2px solid #f97316; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                    <div style="font-size: 0.7rem; color: #9a3412;">🟠 Low Period</div>
                                    <div style="font-size: 0.65rem; color: #64748b;">Feb 16-28</div>
                                    <div style="font-size: 1.25rem; font-weight: 700; color: #f97316;">-20%</div>
                                    <div style="font-size: 0.65rem;">Rp 40 jt/hari</div>
                                </div>
                                <div style="background: #dcfce7; border: 2px solid #22c55e; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                    <div style="font-size: 0.7rem; color: #166534;">🟢 Peak Period</div>
                                    <div style="font-size: 0.65rem; color: #64748b;">Mar 1-15</div>
                                    <div style="font-size: 1.25rem; font-weight: 700; color: #22c55e;">+25%</div>
                                    <div style="font-size: 0.65rem;">Rp 62.5 jt/hari</div>
                                </div>
                            </div>
                        </div>

                        <!-- AI Generated Promos -->
                        <div style="margin-bottom: 1rem;">
                            <div style="font-weight: 600; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span>🎁</span> AI-Generated Promo Packages
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 0.75rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
                                    <div>
                                        <div style="font-weight: 600; font-size: 0.85rem;">🌅 Early Bird Special</div>
                                        <div style="font-size: 0.75rem; color: #64748b;">Book >30 hari = 20% off + Free Parking</div>
                                    </div>
                                    <button style="background: #3b82f6; color: white; border: none; padding: 0.375rem 0.75rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer;">Activate</button>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 0.75rem; border-radius: 8px; border-left: 4px solid #ef4444;">
                                    <div>
                                        <div style="font-weight: 600; font-size: 0.85rem;">⚡ Last Minute Deal</div>
                                        <div style="font-size: 0.75rem; color: #64748b;">Book <7 hari = 40% off (limited time)</div>
                                    </div>
                                    <button style="background: #ef4444; color: white; border: none; padding: 0.375rem 0.75rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer;">Activate</button>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 0.75rem; border-radius: 8px; border-left: 4px solid #22c55e;">
                                    <div>
                                        <div style="font-weight: 600; font-size: 0.85rem;">📦 Bundle Package</div>
                                        <div style="font-size: 0.75rem; color: #64748b;">Hall + Sound + Lighting = 25% off</div>
                                    </div>
                                    <button style="background: #22c55e; color: white; border: none; padding: 0.375rem 0.75rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer;">Activate</button>
                                </div>
                            </div>
                        </div>

                        <!-- Auto Marketing Actions -->
                        <div style="background: #eff6ff; border: 1px solid #3b82f6; padding: 1rem; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span>📧</span> Auto Marketing Actions
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; font-size: 0.8rem;">
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" checked> Email blast ke 245 past customers
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" checked> Push notification ke EO partners
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox"> Post ke social media (manual)
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" checked> Enable flash sale di website
                                </div>
                            </div>
                            <button style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem; cursor: pointer; margin-top: 1rem; width: 100%;">
                                🚀 Execute AI Marketing Campaign
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Daftar Booking -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">📋 Daftar Booking</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">+ Booking Baru</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>No. Booking</th>
                                    <th>Event</th>
                                    <th>Tanggal</th>
                                    <th>Venue</th>
                                    <th>Nilai</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-weight: 500; font-family: monospace;">PRB-2026-0042</td>
                                    <td>Seminar Nasional UMKM</td>
                                    <td>24-25 Jan</td>
                                    <td>Hall Eksibisi A</td>
                                    <td>Rp 45.000.000</td>
                                    <td><span style="background: #3b82f6; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">🔵 Confirmed</span></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500; font-family: monospace;">PRB-2026-0040</td>
                                    <td>Pameran Property Expo</td>
                                    <td>11-12 Jan</td>
                                    <td>Hall Utama + Eksibisi</td>
                                    <td>Rp 180.000.000</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">🔴 Full</span></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500; font-family: monospace;">PRB-2026-0045</td>
                                    <td>Wedding Reception</td>
                                    <td>7 Jan</td>
                                    <td>Hall Utama</td>
                                    <td>Rp 85.000.000</td>
                                    <td><span style="background: #eab308; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">🟡 Pending</span></td>
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
window.ppsuModules.push(modul_prsu);
