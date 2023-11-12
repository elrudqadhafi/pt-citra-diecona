import Bangunan from "../assets/konstruksi.png"
import SumberDayaAir from "../assets/air.png"
import PembangunanWilayah from "../assets/wilayah.png"
import FasilitasIndustri from "../assets/industri.png"
import NonKonstruksi from "../assets/non.png"

// Gambar Layanan
import SurveyImage from "../assets/survey.png"
import StudyPenelitian from "../assets/studyimg.png"
import PerencanaanTeknik from "../assets/design.png"
import ManajemenProyek from "../assets/manajemenproyek.png"

// Gambar Kualifikasi
import PengawasanRekayasa from "../assets/pengawasanrekayasa.png"
import PerencanaanRekayasa from "../assets/perencanaanrekayasa.png"
import KonsultansiSpesialis from "../assets/konsultansispesialis.png"
import KonsultansiLainnya from "../assets/konsultansilainnya.png"

// gambar partner
import HutamaKaryaImage from "../assets/hutamakarya.png"
import WaskitaKaryaImage from "../assets/waskitakrya.png"
import PuprImage from "../assets/pupr.png"
import PlnEnjiniringImage from "../assets/plnenjiniring.png"
import DishubImage from "../assets/dishub.png"
import PelindoImage from "../assets/pelindo3.png"
import AngkasaPuraImage from "../assets/angkasapura2.png"
import RekadayaImage from "../assets/rekadaya.png"
import AdiKaryaImage from "../assets/adikarya.png"

// Gambar Proyek
import FlyOverPku from "../assets/flyover.jpg"
import JalanKeretaApi from "../assets/rantau-pinang.png"
import Tower from "../assets/tower.png"

// Sertifikat dan penghargaan perusahaan
import Sertifikat1 from "../assets/sertifikat.png"

export const sektorUsaha = [
  {
    id: 1,
    path: "/infrastruktur",
    image: Bangunan,
    title: "Infrastruktur",
    desc: "Bangunan Gedung, Jembatan, Jalan, Lapangan Terbang serta fasilitas konstruksi lainnya .....",
  },
  {
    id: 2,
    path: "/sumber-daya-air",
    title: "Sumber Daya Air",
    image: SumberDayaAir,
    desc: "pembangunan daerah pantai, rawa, sungai, Bendungan, Pengendali Banjir, Dermaga .....",
  },
  {
    id: 3,
    path: "/pembangunan-wilayah",
    title: "Pembangunan Wilayah",
    image: PembangunanWilayah,
    desc: "sistem lalu lintas dan terminal pengangkutan, perencanaan kota, pemukiman transmigrasi .....",
  },
  {
    id: 4,
    title: "Pembangunan Lingkungan",
    path: "/pembangunan-lingkungan",
    image: PembangunanWilayah,
    desc: "Kami berperan dalam pengembangan sistem distribusi dan penyediaan air minum .....",
  },
  {
    id: 5,
    path: "/pembangunan-fasilitas-industri",
    title: "Pembangunan Fasilitas Industri",
    image: FasilitasIndustri,
    desc: "Kami juga berperan dalam pemilihan dan perencanaan lokasi kawasan industri .....",
  },
  {
    id: 6,
    path: "/study-ekonomi-manajemen",
    title: "Study Ekonomi & Manajemen",
    image: NonKonstruksi,
    desc: "Studi Ekonomi Regional dan Perkotaan, Riset Pemasaran yang memberikan wawasan .....",
  },
]

export const accordion = [
  {
    id: 1,
    title: "Pengawasan Rekayasa",
    image: PengawasanRekayasa,
  },
  {
    id: 2,
    title: "Perencanaan Rekayasa",
    image: PerencanaanRekayasa,
  },
  {
    id: 3,
    title: "Konsultansi Spesialis",
    image: KonsultansiSpesialis,
  },
  {
    id: 4,
    title: "Konsultansi Lainnya",
    image: KonsultansiLainnya,
  },
]

export const layanan = [
  {
    id: 1,
    image: SurveyImage,
    title: "Survey",
    desc: " Pengumpulan data dan informasi untuk analisis proyek yang membantu dalam pengambilan keputusan dan perencanaan lebih lanjut.",
  },
  {
    id: 2,
    image: StudyPenelitian,
    title: "Study Penelitan",
    desc: "Penelitian mendalam untuk memahami topik tertentu, memberikan wawasan penting sebelum melanjutkan dengan proyek.",
  },
  {
    id: 3,
    image: StudyPenelitian,
    title: "Study Kelayakan",
    desc: " Evaluasi menyeluruh tentang aspek ekonomi, teknis, dan sosial untuk menentukan apakah proyek dapat dilaksanakan.",
  },
  {
    id: 4,
    image: PerencanaanTeknik,
    title: "Perencaan Teknik",
    desc: "Proses merancang dan merencanakan aspek teknis proyek untuk mengarahkan pelaksanaan dapat berjalan dengan baik.",
  },
  {
    id: 5,
    image: ManajemenProyek,
    title: "Manajemen Proyek",
    desc: " Pengelolaan seluruh aspek proyek, termasuk perencanaan, pengawasan, dan kontrol untuk mencapai tujuan yang ditetapkan.",
  },
  {
    id: 6,
    image: SurveyImage,
    title: "Pengawasan Teknik",
    desc: "Mengawasi pelaksanaan proyek, memastikan kepatuhan terhadap rencana dan standar teknis yang ditetapkan.",
  },
  {
    id: 7,
    image: SurveyImage,
    title: "Evaluasi",
    desc: "Tinjauan kembali terhadap rencana dan proses manajemen proyek untuk meningkatkan efisiensi dan efektivitas proyek.",
  },
  {
    id: 8,
    image: StudyPenelitian,
    title: "Study AMDAL",
    desc: "Analisis dampak lingkungan yang menyeluruh, membantu mengidentifikasi dan mengurangi dampak negatif proyek pada lingkungan.",
  },
  {
    id: 9,
    image: SurveyImage,
    title: "Project Proposal",
    desc: " Dokumen rinci yang menjelaskan tujuan, rencana, anggaran, dan manfaat proyek yang diusulkan kepada para pemangku kepentingan.",
  },
]

export const partner = [
  {
    id: 1,
    image: PuprImage,
  },
  {
    id: 2,
    image: DishubImage,
  },
  {
    id: 3,
    image: HutamaKaryaImage,
  },
  {
    id: 4,
    image: WaskitaKaryaImage,
  },
  {
    id: 5,
    image: PlnEnjiniringImage,
  },
  {
    id: 6,
    image: PelindoImage,
  },
  {
    id: 7,
    image: AngkasaPuraImage,
  },
  {
    id: 8,
    image: RekadayaImage,
  },
  {
    id: 9,
    image: AdiKaryaImage,
  },
  {
    id: 10,
    image: PuprImage,
  },
]

export const proyek = [
  {
    id: 1,
    title: "Fly Over Pasar Pagi Arengka",
    work: "Konsultan Manajemen Proyek Terkait Konstruksi Pekerjaan Teknik Sipil Transportasi (KL 404).",
    location: "Pekanbaru, Prov Riau.",
    image: FlyOverPku,
  },
  {
    id: 2,
    title: "Pembangunan Jalan Kereta Api",
    work: "Jasa Pengawasan Pekerjaan Konstruksi Teknil Sipil Transportasi (RE202), KM.0+000 - 10+000.",
    location: "Rantau Prapat - Kota Pinang Prov SUMUT",
    image: JalanKeretaApi,
  },
  {
    id: 3,
    title: "Supervisi Konstruksi Tower T/L 275Kv",
    work: "Jasa Pengawas Pekerjaan Konstruksi dan Instalasi Proses dan Fasilitas  Industri (RE204).",
    location: "Meulaboh - Sigli Prov NAD",
    image: Tower,
  },
]

export const sertifikat = [
  {
    id: 1,
    image: Sertifikat1,
  },
  {
    id: 2,
    image: Sertifikat1,
  },
  {
    id: 3,
    image: Sertifikat1,
  },
  {
    id: 4,
    image: Sertifikat1,
  },
  {
    id: 5,
    image: Sertifikat1,
  },
  {
    id: 6,
    image: Sertifikat1,
  },
]
