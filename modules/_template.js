// ============================================
// TEMPLATE MODUL BARU
// ============================================
// Petunjuk penggunaan:
// 1. Copy file ini ke modules/modul[X].js
// 2. Ganti semua [X] dengan nomor modul
// 3. Isi konten sesuai kebutuhan
// 4. Tambahkan <script src="modules/modul[X].js"></script> di index.html
// ============================================

const modul_template = {
    // ID unik untuk modul (gunakan lowercase, tanpa spasi)
    id: 'modul_template',

    // Judul yang tampil di header halaman
    title: 'Modul X - Nama Modul',

    // Subtitle/deskripsi singkat
    subtitle: 'Deskripsi singkat tentang modul ini',

    // Icon emoji untuk menu
    icon: '📦',

    // Judul untuk menu sidebar
    menuTitle: 'Modul X - Nama Singkat',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Nama Modul',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',  // Biru
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: 'Jelaskan tujuan dari modul ini...'
            },
            {
                icon: '✅',
                iconBg: 'rgba(16, 185, 129, 0.1)',  // Hijau
                iconColor: '#10b981',
                title: 'Fitur Utama',
                content: `1. Fitur pertama<br>
                         2. Fitur kedua<br>
                         3. Fitur ketiga`
            },
            {
                icon: '👤',
                iconBg: 'rgba(245, 158, 11, 0.1)',  // Orange
                iconColor: '#f59e0b',
                title: 'Aktor Terlibat',
                content: `1. <strong>Aktor 1</strong> - Deskripsi peran<br>
                         2. <strong>Aktor 2</strong> - Deskripsi peran`
            },
            {
                icon: '📊',
                iconBg: 'rgba(6, 182, 212, 0.1)',  // Cyan
                iconColor: '#06b6d4',
                title: 'Catatan Tambahan',
                content: 'Informasi tambahan yang relevan...'
            }
            // Tambahkan item analisa lainnya sesuai kebutuhan
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Nama Modul',
        mermaid: `flowchart TD
A[Start] --> B{Keputusan}
B -->|Ya| C[Proses 1]
B -->|Tidak| D[Proses 2]
C --> E[End]
D --> E
style A fill:#3b82f6,stroke:#1d4ed8,color:#fff
style E fill:#10b981,stroke:#059669,color:#fff
style B fill:#f59e0b,stroke:#d97706,color:#fff`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype - Nama Modul',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <div class="prototype-mockup">
                    <div class="mockup-header">
                        <span class="mockup-title">📋 Judul Form</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">Aksi</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <div class="mockup-form-group">
                            <label class="mockup-label">Label Field *</label>
                            <input type="text" class="mockup-input" placeholder="Placeholder...">
                        </div>

                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Field 1</label>
                                <input type="text" class="mockup-input" placeholder="...">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Field 2</label>
                                <select class="mockup-select">
                                    <option>Pilihan 1</option>
                                    <option>Pilihan 2</option>
                                </select>
                            </div>
                        </div>

                        <button class="mockup-submit">💾 Simpan</button>
                    </div>
                </div>

                <!-- Contoh Tabel -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">📋 Daftar Data</span>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nama</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#001</td>
                                    <td>Data 1</td>
                                    <td><span class="mockup-status approved">Aktif</span></td>
                                </tr>
                                <tr>
                                    <td>#002</td>
                                    <td>Data 2</td>
                                    <td><span class="mockup-status pending">Pending</span></td>
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
// (Jangan ubah bagian ini)
// ============================================
if (typeof window.ppsuModules === 'undefined') {
    window.ppsuModules = [];
}
window.ppsuModules.push(modul_template);
