// ============================================
// MODUL 6 - SISTEM OPERASIONAL TRANSPORTASI
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_transportasi = {
    id: 'modul_transportasi',
    title: 'Modul 6 - Sistem Operasional Transportasi',
    subtitle: 'Ticketing Digital, GPS Tracking, Monitoring Kapasitas & Integrasi Keuangan',
    icon: '🚢',
    menuTitle: 'Operasional Transportasi',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem Operasional Transportasi',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Membangun sistem transportasi penyeberangan terintegrasi dengan ticketing digital, 
                         GPS tracking real-time dengan tampilan publik, monitoring kapasitas dengan warning system,
                         dan integrasi langsung ke modul Keuangan. <strong>Menggantikan aplikasi pihak ketiga.</strong>`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Ticketing:</strong> Aplikasi pihak ketiga (biaya lisensi bulanan)<br>
                         <strong>2. GPS Tracking:</strong> Tidak ada, sulit monitor posisi kapal<br>
                         <strong>3. Kapasitas:</strong> Manual counting, risiko overcapacity<br>
                         <strong>4. Rekonsiliasi:</strong> Manual, data tidak real-time<br>
                         <strong>5. CCTV:</strong> Tidak terintegrasi sistem`
            },
            {
                icon: '✅',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Fitur Utama (6 Kelompok)',
                content: `<strong>1. Armada:</strong> Data kapal, rute, jadwal, crew<br>
                         <strong>2. Ticketing:</strong> Web/mobile, QR code, scan validasi<br>
                         <strong>3. GPS Tracking:</strong> Real-time, ETA, tampilan publik<br>
                         <strong>4. Kapasitas:</strong> Warning 80%, Alert 90%, Block 100%<br>
                         <strong>5. CCTV:</strong> Feed kapal & dermaga terintegrasi<br>
                         <strong>6. Pembayaran:</strong> Cash, QRIS, e-wallet, VA bank`
            },
            {
                icon: '⚠️',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Sistem Warning Kapasitas',
                content: `<strong>🟢 Normal:</strong> < 80% kapasitas<br>
                         <strong>🟡 Warning:</strong> 80-90% → Notifikasi Operator<br>
                         <strong>🟠 Alert:</strong> 90-100% → Notifikasi Manajer<br>
                         <strong>🔴 Full:</strong> 100% → BLOCK PENJUALAN TIKET`
            },
            {
                icon: '💰',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Integrasi Keuangan',
                content: `<strong>Cash:</strong> Jurnal Kas → Pendapatan Tiket<br>
                         <strong>QRIS/E-Wallet:</strong> Jurnal Bank → Pendapatan<br>
                         <strong>Refund:</strong> Jurnal balik otomatis<br>
                         <strong>Settlement:</strong> Rekonsiliasi bank otomatis`
            },
            {
                icon: '📍',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Tampilan Publik Tracking',
                content: `<strong>Website:</strong> Peta real-time posisi kapal<br>
                         <strong>Dermaga:</strong> Layar digital info jadwal<br>
                         <strong>Mobile:</strong> Responsive untuk smartphone<br>
                         <strong>Info:</strong> ETA, kapasitas, keberangkatan`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Operasional Transportasi',
        mermaid: `flowchart TB
subgraph TICKET["🎫 ALUR PEMBELIAN TIKET"]
    direction TB
    T1[Pilih<br>Jadwal] --> T2[Pilih<br>Jenis Tiket]
    T2 --> T3{Cek<br>Kapasitas}
    T3 -->|Tersedia| T4[Pembayaran]
    T3 -->|Penuh| T3A[❌ SOLD OUT]
    T4 --> T5[Generate<br>E-Ticket + QR]
    T5 --> T6[Scan QR<br>Validasi]
    T6 --> T7[Boarding<br>Kapal]
end

subgraph GPS["📍 GPS TRACKING"]
    direction TB
    G1[GPS Device<br>di Kapal] --> G2[Send Data<br>tiap 10 detik]
    G2 --> G3[Server<br>Process]
    G3 --> G4[Calculate<br>ETA]
    G4 --> G5[Update<br>Database]
    G5 --> G6[Push ke<br>Dashboard]
    G5 --> G7[Push ke<br>Public Map]
end

subgraph CAPACITY["⚠️ MONITORING KAPASITAS"]
    direction TB
    C1[Tiket<br>Terjual] --> C2[Update<br>Counter]
    C2 --> C3{Check<br>Level}
    C3 -->|< 80%| C4[🟢 Normal]
    C3 -->|80-90%| C5[🟡 Warning<br>Notif Operator]
    C3 -->|90-100%| C6[🟠 Alert<br>Notif Manager]
    C3 -->|= 100%| C7[🔴 BLOCK<br>SALE]
end

subgraph PAY["💳 PEMBAYARAN & KEUANGAN"]
    direction TB
    P1[Cash<br>Loket] --> P3[Jurnal<br>Keuangan]
    P2[QRIS /<br>E-Wallet] --> P3
    P3 --> P4[Kas/Bank →<br>Pendapatan]
    P4 --> KEU[(💰 MODUL<br>KEUANGAN)]
end

T4 --> P1
T4 --> P2
T7 --> C1

style TICKET fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style GPS fill:#dcfce7,stroke:#22c55e,color:#166534
style CAPACITY fill:#fef3c7,stroke:#f59e0b,color:#78350f
style PAY fill:#f3e8ff,stroke:#a855f7,color:#581c87
style KEU fill:#fce7f3,stroke:#ec4899,color:#831843`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem Operasional Transportasi',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard Transportasi -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);">
                        <span class="mockup-title">🚢 Dashboard Transportasi</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Tiket Hari Ini</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">324</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Rp 16.2 Jt</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Kapal Aktif</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">4</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">dari 5 unit</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Trip Hari Ini</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">12</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">On schedule</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Avg Load Factor</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">78%</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Target 75%</div>
                            </div>
                        </div>

                        <!-- Capacity Alert -->
                        <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.25rem;">⚠️</span>
                            <div style="font-size: 0.85rem;">
                                <strong>KM Toba I</strong> - Jadwal 14:00 kapasitas <strong>85%</strong> (68/80 penumpang)
                            </div>
                        </div>
                    </div>
                </div>

                <!-- GPS Tracking Map -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">📍 Live GPS Tracking</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #16a34a;">🔄 Refresh</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <!-- Simulated Map -->
                        <div style="background: linear-gradient(180deg, #bfdbfe 0%, #60a5fa 100%); height: 300px; position: relative; overflow: hidden;">
                            <!-- Water pattern -->
                            <div style="position: absolute; inset: 0; opacity: 0.3; background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);"></div>
                            
                            <!-- Dermaga Points -->
                            <div style="position: absolute; left: 10%; top: 30%; background: white; padding: 0.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); font-size: 0.75rem;">
                                <div style="font-weight: 600;">🏪 Dermaga Parapat</div>
                            </div>
                            <div style="position: absolute; right: 15%; top: 25%; background: white; padding: 0.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); font-size: 0.75rem;">
                                <div style="font-weight: 600;">🏪 Dermaga Samosir</div>
                            </div>
                            <div style="position: absolute; right: 30%; bottom: 20%; background: white; padding: 0.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); font-size: 0.75rem;">
                                <div style="font-weight: 600;">🏪 Dermaga Tomok</div>
                            </div>

                            <!-- Kapal Markers -->
                            <div style="position: absolute; left: 35%; top: 45%; animation: float 3s ease-in-out infinite;">
                                <div style="background: #22c55e; color: white; padding: 0.5rem 0.75rem; border-radius: 8px; font-size: 0.75rem; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
                                    🚢 <strong>KM Toba I</strong><br>
                                    <span style="font-size: 0.65rem;">→ Samosir | ETA 15 min</span>
                                </div>
                            </div>
                            <div style="position: absolute; right: 25%; top: 55%; animation: float 3s ease-in-out infinite; animation-delay: 1s;">
                                <div style="background: #3b82f6; color: white; padding: 0.5rem 0.75rem; border-radius: 8px; font-size: 0.75rem; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
                                    🚢 <strong>KM Toba II</strong><br>
                                    <span style="font-size: 0.65rem;">→ Parapat | ETA 22 min</span>
                                </div>
                            </div>
                        </div>
                        <style>
                            @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
                        </style>
                    </div>
                </div>

                <!-- Ticket Purchase -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                        <span class="mockup-title">🎫 Beli Tiket Penyeberangan</span>
                    </div>
                    <div class="mockup-content">
                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Rute *</label>
                                <select class="mockup-select">
                                    <option>Parapat → Samosir</option>
                                    <option>Samosir → Parapat</option>
                                    <option>Parapat → Tomok</option>
                                </select>
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Tanggal *</label>
                                <input type="date" class="mockup-input" value="2026-01-18">
                            </div>
                        </div>

                        <!-- Jadwal Available -->
                        <div style="margin: 1rem 0;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">Pilih Jadwal:</div>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;">
                                <div style="background: #f8fafc; border: 2px solid #e2e8f0; padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                                    <div style="font-weight: 600;">08:00</div>
                                    <div style="font-size: 0.75rem; color: #22c55e;">🟢 45/80</div>
                                </div>
                                <div style="background: #dbeafe; border: 2px solid #3b82f6; padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                                    <div style="font-weight: 600;">10:00</div>
                                    <div style="font-size: 0.75rem; color: #22c55e;">🟢 52/80</div>
                                </div>
                                <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                                    <div style="font-weight: 600;">14:00</div>
                                    <div style="font-size: 0.75rem; color: #f59e0b;">🟡 68/80</div>
                                </div>
                            </div>
                        </div>

                        <!-- Tiket Selection -->
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="font-weight: 600; margin-bottom: 0.75rem;">Jenis Tiket:</div>
                            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                                <div style="flex: 1; min-width: 150px;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
                                        <span>🚶 Dewasa</span>
                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                            <button style="width: 24px; height: 24px; border: 1px solid #e2e8f0; border-radius: 4px; cursor: pointer;">-</button>
                                            <span style="font-weight: 600;">2</span>
                                            <button style="width: 24px; height: 24px; border: 1px solid #e2e8f0; border-radius: 4px; cursor: pointer;">+</button>
                                        </div>
                                    </div>
                                    <div style="font-size: 0.75rem; color: #64748b; text-align: right;">@ Rp 50.000</div>
                                </div>
                                <div style="flex: 1; min-width: 150px;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
                                        <span>👶 Anak</span>
                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                            <button style="width: 24px; height: 24px; border: 1px solid #e2e8f0; border-radius: 4px; cursor: pointer;">-</button>
                                            <span style="font-weight: 600;">1</span>
                                            <button style="width: 24px; height: 24px; border: 1px solid #e2e8f0; border-radius: 4px; cursor: pointer;">+</button>
                                        </div>
                                    </div>
                                    <div style="font-size: 0.75rem; color: #64748b; text-align: right;">@ Rp 25.000</div>
                                </div>
                            </div>
                        </div>

                        <!-- Total & Payment -->
                        <div style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 1rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <div>
                                <div style="font-size: 0.85rem; opacity: 0.9;">Total Pembayaran</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">Rp 125.000</div>
                            </div>
                            <div style="text-align: right; font-size: 0.8rem;">
                                2 Dewasa × Rp 50.000<br>
                                1 Anak × Rp 25.000
                            </div>
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;">
                            <button class="mockup-submit" style="background: #22c55e;">💵 Bayar Tunai</button>
                            <button class="mockup-submit" style="background: #8b5cf6;">📱 QRIS</button>
                            <button class="mockup-submit" style="background: #3b82f6;">🏦 Transfer</button>
                        </div>
                    </div>
                </div>

                <!-- E-Ticket QR -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <span class="mockup-title">🎟️ E-Ticket</span>
                    </div>
                    <div class="mockup-content" style="text-align: center;">
                        <div style="background: white; border: 2px dashed #f59e0b; padding: 1.5rem; border-radius: 12px; display: inline-block;">
                            <div style="font-size: 0.85rem; color: #64748b;">No. Tiket</div>
                            <div style="font-size: 1.25rem; font-weight: 700; font-family: monospace; margin-bottom: 1rem;">TRX-2026-01-18-0045</div>
                            
                            <!-- QR Code Placeholder -->
                            <div style="width: 150px; height: 150px; background: linear-gradient(45deg, #1e293b 25%, transparent 25%), linear-gradient(-45deg, #1e293b 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1e293b 75%), linear-gradient(-45deg, transparent 75%, #1e293b 75%); background-size: 20px 20px; background-position: 0 0, 0 10px, 10px -10px, -10px 0px; margin: 0 auto 1rem; border-radius: 8px;"></div>
                            
                            <div style="font-size: 0.85rem;">
                                <strong>Parapat → Samosir</strong><br>
                                18 Jan 2026 | 10:00<br>
                                2 Dewasa, 1 Anak<br>
                                <strong>KM Toba I</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Jadwal Kapal -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">📅 Jadwal Keberangkatan Hari Ini</span>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Waktu</th>
                                    <th>Kapal</th>
                                    <th>Rute</th>
                                    <th>Kapasitas</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-weight: 600;">08:00</td>
                                    <td>KM Toba I</td>
                                    <td>Parapat → Samosir</td>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                            <div style="flex: 1; background: #e2e8f0; border-radius: 4px; height: 8px; overflow: hidden;">
                                                <div style="width: 56%; background: #22c55e; height: 100%;"></div>
                                            </div>
                                            <span style="font-size: 0.75rem;">45/80</span>
                                        </div>
                                    </td>
                                    <td><span class="mockup-status approved">🟢 Available</span></td>
                                </tr>
                                <tr style="background: #fefce8;">
                                    <td style="font-weight: 600;">10:00</td>
                                    <td>KM Toba II</td>
                                    <td>Parapat → Samosir</td>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                            <div style="flex: 1; background: #e2e8f0; border-radius: 4px; height: 8px; overflow: hidden;">
                                                <div style="width: 85%; background: #f59e0b; height: 100%;"></div>
                                            </div>
                                            <span style="font-size: 0.75rem;">68/80</span>
                                        </div>
                                    </td>
                                    <td><span class="mockup-status pending">🟡 Almost Full</span></td>
                                </tr>
                                <tr style="background: #fef2f2;">
                                    <td style="font-weight: 600;">14:00</td>
                                    <td>KM Toba I</td>
                                    <td>Samosir → Parapat</td>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                            <div style="flex: 1; background: #e2e8f0; border-radius: 4px; height: 8px; overflow: hidden;">
                                                <div style="width: 100%; background: #ef4444; height: 100%;"></div>
                                            </div>
                                            <span style="font-size: 0.75rem;">80/80</span>
                                        </div>
                                    </td>
                                    <td><span class="mockup-status rejected">🔴 FULL</span></td>
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
window.ppsuModules.push(modul_transportasi);
