const apiUrl = 'https://tame-lime-walrus-veil.cyclic.app/users';

// Fetch all users and render to table
async function getUsers() {
  const response = await fetch(apiUrl);
  const users = await response.json();
  const usersList = document.getElementById('usersList');
  usersList.innerHTML = '';
  users.forEach((user) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      
      <td>${user.items}</td>
    <td>
        <button onclick="editUser(${user.id})">Edit</button>
        <button onclick="deleteUser(${user.id})">Delete</button>
      </td>
    `;
    usersList.appendChild(tr);
  });
}

// Add user
async function addUser() {
  const name = document.getElementById('name').value;
  //   const email = document.getElementById('email').value;
  const data = { name };
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  await response.json();
  getUsers();
}

// Edit user
async function editUser(userId) {
  const response = await fetch(`${apiUrl}/${userId}`);
  const user = await response.json();
  const name = prompt('Enter name:', user.name);
  const email = prompt('Enter email:', user.email);
  const data = { name, email };
  await fetch(`${apiUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  getUsers();
}

// Delete user
async function deleteUser(userId) {
  if (confirm('Are you sure to delete?')) {
    await fetch(`${apiUrl}/${userId}`, {
      method: 'DELETE',
    });
    getUsers();
  }
}

// Call getUsers function when page is loaded
getUsers();
// ====================== maping bahan ajar object dta to html ===============

const data = [
  {
    nama: 'Poster Menjaga Kebersihan Poster Ruang Kelas',
    urlLink: 'https://drive.google.com/file/d/1OE-cqW2RVjJY573gPfjLNV_AL62reovo/view?usp=sharing',
  },
  {
    nama: 'pajangan kelas',
    urlLink: 'https://drive.google.com/file/d/1OD_5fpbKOxeF0AzNVUAuFiC730zZuNf9/view?usp=sharing',
  },
  {
    nama: 'Pastel Green Simple Minimalist Abstract Crossword Puzzle Day Instagram Story',
    urlLink: 'https://drive.google.com/file/d/1O8OG5uQJVndl3wn_rsw0IKmuSyVpwWf1/view?usp=sharing',
  },
  {
    nama: 'MONOPOLI',
    urlLink: 'https://drive.google.com/file/d/1Iz3-is8DxvMdrI2uDC-6lQ83dj2Gnc5u/view?usp=sharing',
  },
  {
    nama: 'BIOGRAFI PAHLAWAN',
    urlLink: 'https://drive.google.com/file/d/1Iwcgqa_jI7U6fLZC0MU4gA9Vv-GY8VRt/view?usp=sharing',
  },
  {
    nama: 'Pajangan Kelas',
    urlLink: 'https://drive.google.com/file/d/1ML3MB8ZZkTxN9X81nKKQA8VJnUCERDrx/view?usp=sharing',
  },
  {
    nama: 'Krem Coklat Kreatif Peraturan Kelas Poster',
    urlLink: 'https://drive.google.com/file/d/1NK0m4Uuk41D9BrQvnhgC-K22_VKu7rTK/view?usp=sharing',
  },
  {
    nama: 'Hitam dan Kuning Ilustrasi Kebiasaan Buruh Merusak Otak Infografis (Video).mp4',
    urlLink: 'https://drive.google.com/file/d/1M_8eeW0i2mYoKA-tSEtm4cdrlR2gpec8/view?usp=sharing',
  },
  {
    nama: 'Penuh Warna Cat Air Jadwal Piket Kelas Schedule ',
    urlLink: 'https://drive.google.com/file/d/144cO7ceXnmP1YU0znoqAw_M9paC13sDG/view?usp=sharing',
  },
  {
    nama: 'Volume Bangun Ruang',
    urlLink: 'https://drive.google.com/file/d/14d0Z_pBRGSAwEAofmkI7_Ww0eFo8XktV/view?usp=sharing',
  },
  {
    nama: 'KARTU UCAPAN',
    urlLink: 'https://drive.google.com/file/d/14SHeRNdN12DkPw2ulgx3LyZDJ270uSb4/view?usp=sharing',
  },
  {
    nama: 'LKPD Bangun Ruang',
    urlLink: 'https://drive.google.com/file/d/14ORuJSGfmSN61CH8GzmHI7xSsjTNwg3f/view?usp=sharing',
  },
  {
    nama: 'Puzzle Perundungan',
    urlLink: 'https://docs.google.com/document/d/1NUjhPk-qM6gyLo33T7UDNgGs3IoY4VgT/edit?usp=sharing&ouid=116617495551462274477&rtpof=true&sd=true',
  },
  {
    nama: 'puzzle penyaluran energi listrik',
    urlLink: 'https://drive.google.com/file/d/1NGoIt0TcX95T2Enex43O0a80B_yDCVw1/view?usp=sharing',
  },
  {
    nama: 'Soal RANGKAIAN LISTRIK',
    urlLink: 'https://drive.google.com/file/d/1N0pkCp6VioNMG0ANPCTfqr-3u-Y6iezF/view?usp=sharing',
  },
  {
    nama: 'Catatan Rangkaian Listrik Seri Paralel',
    urlLink: 'https://drive.google.com/file/d/1MzYGT9me6fD0qA4xY9scBBZF1UV-TtQh/view?usp=sharing',
  },
  {
    nama: 'SUMPAH PEMUDA',
    urlLink: 'https://docs.google.com/document/d/1MxgTtioUDAGhHl-fpRfWGabKKGqCluRd/edit?usp=sharing&ouid=116617495551462274477&rtpof=true&sd=true',
  },
  {
    nama: 'Lembar Kerja Matematika Bangun Ruang Hijau Sederhana',
    urlLink: 'https://drive.google.com/file/d/1MshYVNrVSZHHh-HfJlayfvRG5Lc6ck5z/view?usp=sharing',
  },
  {
    nama: 'Games Menarik',
    urlLink: 'https://drive.google.com/file/d/1NPNrf9jqurHincl_RzAOQBY9xfyo4FNf/view?usp=sharing',
  },
  {
    nama: 'TV_MTK_HAK ANAK',
    urlLink: 'https://drive.google.com/file/d/1NLSvGttKiNqeDsNxi3i_x22ML-i3LKdh/view?usp=sharing',
  },
  {
    nama: 'KATA BAKU DAN TIDAK BAKU PRINT',
    urlLink: 'https://docs.google.com/document/d/1NRnTZ_A_67mwAGCVqVoF44Xkv6y-Qcg5/edit?usp=sharing&ouid=116617495551462274477&rtpof=true&sd=true',
  },
  {
    nama: 'POHON PENGURANGAN BILANGAN BULAT',
    urlLink: 'https://docs.google.com/document/d/1NmprlPQgc8QbVgi6PRsrNedQYHzDvur_/edit?usp=sharing&ouid=116617495551462274477&rtpof=true&sd=true',
  },
  {
    nama: 'MEWARNAI BALON PENJUMLAHAN BILANGAN BULAT',
    urlLink: 'https://docs.google.com/document/d/1NWxZxnW8Q2kS4Ccelfaiv9J5mGk3tIfU/edit?usp=sharing&ouid=116617495551462274477&rtpof=true&sd=true',
  },
  {
    nama: 'puzzle pahlawan',
    urlLink: 'https://drive.google.com/file/d/1Nz2oOWnQ_8La6LjnInjttDQ-TsTWGqZv/view?usp=sharing',
  },
  {
    nama: 'DIRGAHAYU RI',
    urlLink: 'https://drive.google.com/file/d/1NrEfYb2vSybpvayqWX2JurBEooPm2N4J/view?usp=sharing',
  },
  {
    nama: 'Perkembangbiakan Tumbuhan',
    urlLink: 'https://drive.google.com/file/d/1O5Rvb9Ok6qAr6gOmXoEDTssRcJSXzkj7/view?usp=sharing',
  },
  {
    nama: 'NEGARA-NEGARA ASEAN ',
    urlLink: 'https://docs.google.com/document/d/1O3uOM9C1DM7J8899cZiI0KcBWl3wdIJu/edit?usp=sharing&ouid=116617495551462274477&rtpof=true&sd=true',
  },
  ,
  {
    nama: 'Lembar Kerja IPA Bagian Bunga Merah Ilustratif',
    urlLink: 'https://drive.google.com/file/d/1Nziz5eDGy6DJMb43xaIjKyauqZYZt8uo/view?usp=sharing',
  },
  {
    nama: 'Bi-color Solar System Crossword Puzzle Printable Worksheet',
    urlLink: 'https://drive.google.com/file/d/146h4VSLsejlWluSmHvtlJMuljYAuxnHI/view?usp=sharing',
  },
  {
    nama: 'LKPD Tari Daerah Berpasangan',
    urlLink: 'https://drive.google.com/file/d/19lZ_6p4jCniz2UYrijowQaMMA4u3_EdW/view?usp=sharing',
  },
  // {
  //   nama: '',
  //   urlLink: '',
  // }
];

const listLkpd = data.map(
  (dat) =>
    `<div class="skills__data"><div class="skills__names"><i class="bx bx-book-bookmark skills__icon"></i><span class="skills__name"><a href=${dat.urlLink} target="_blank">${dat.nama}</a></span></div><div class="skills__bar skills__html"></div></div>`
);

document.getElementById('lkpd').innerHTML = listLkpd.join('');
