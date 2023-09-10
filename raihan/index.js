// Buat objek yang mewakili data diri Anda
const dataDiri = {
    nama: 'Muhammad Raihan',
    umur: 22,
    alamat: 'Tangerang',
    pekerjaan: 'Mahasiswa',
    email: 'muhammadraihan1607@gmail.com',
    hobi: ['Gaming', 'Riding', 'Badminton']
  };
  
  // Tampilkan data diri Anda di konsol
  console.log('Data Diri:');
  console.log(`Nama: ${dataDiri.nama}`);
  console.log(`Umur: ${dataDiri.umur}`);
  console.log(`Alamat: ${dataDiri.alamat}`);
  console.log(`Pekerjaan: ${dataDiri.pekerjaan}`);
  console.log(`Email: ${dataDiri.email}`);
  console.log('Hobi:');
  dataDiri.hobi.forEach((hobi, index) => {
    console.log(`${index + 1}. ${hobi}`);
  });
  