const khodam = [
    {
        'khodam' : 'Roger Sumatra',
        'img' : 'https://media1.tenor.com/m/r_mWvlKWHPAAAAAC/wolf-big-dog.gif',
        'desc' : 'didalam diri kamu ada sosok serigala kesepian yang mendampingimu'
    },
    {
        'khodam' : 'Babi Icikiwir',
        'img' : 'https://i.pinimg.com/564x/0f/86/6c/0f866ce4373f288aca970cae971891fc.jpg',
        'desc' : 'Icikiwir merupakan jelmaan siluman motor'
    },
    {
        'khodam' : 'Burung Papilo',
        'img' : 'https://i.pinimg.com/564x/51/fe/07/51fe078c2cb0f0689cfda55cb13b1b3d.jpg',
        'desc' : 'loremLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magnam dolor rem hic in tenetur ex ut voluptas alias, ea voluptates iure autem quidem nesciunt nulla at deserunt excepturi consequatur.'
    },
    {
        'khodam' : 'scp 004',
        'img' : 'https://i.pinimg.com/564x/67/ab/77/67ab77168e5b4d267fa7065771a07cb3.jpg',
        'desc' : 'loremLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magnam dolor rem hic in tenetur ex ut voluptas alias, ea voluptates iure autem quidem nesciunt nulla at deserunt excepturi consequatur.'
    },
    {
        'khodam' : 'Skeleton Mewing',
        'img' : 'https://i.pinimg.com/originals/e8/a0/1b/e8a01bb33f2b4d505dc8dbb0f5022efa.gif',
        'desc' : 'loremLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magnam dolor rem hic in tenetur ex ut voluptas alias, ea voluptates iure autem quidem nesciunt nulla at deserunt excepturi consequatur.'
    },
    {
        'khodam' : 'Pinguin bandar',
        'img' : 'https://i.pinimg.com/564x/77/41/a0/7741a0ea948c9bf5c7ae2ead23b754f3.jpg',
        'desc' : 'loremLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magnam dolor rem hic in tenetur ex ut voluptas alias, ea voluptates iure autem quidem nesciunt nulla at deserunt excepturi consequatur.'
    },
    {
        'khodam' : 'The Handsome Squidward',
        'img' : 'https://i.pinimg.com/564x/80/a1/b4/80a1b4ea8681264dfc843b51c94e79db.jpg',
        'desc' : 'loremLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magnam dolor rem hic in tenetur ex ut voluptas alias, ea voluptates iure autem quidem nesciunt nulla at deserunt excepturi consequatur.'
    },
    {
        'khodam' : 'Kosong',
        'img' : 'https://i.pinimg.com/564x/6f/0c/7d/6f0c7dd236a49fef3d2c7ad9def7f87c.jpg',
        'desc' : 'loremLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magnam dolor rem hic in tenetur ex ut voluptas alias, ea voluptates iure autem quidem nesciunt nulla at deserunt excepturi consequatur.'
    }
]

const showKhodam = document.getElementById('showKhodam');
const loading = document.getElementById('loading');
const reaction = document.getElementById('reaction');
const btn_khodam = document.getElementById('btn-khodam');
const btn_cekLagi = document.getElementById('cek-lagi');


async function handleClick(){
    loading.style.display = 'block';
    reaction.style.display = 'none';
    
    
    
    setTimeout(() => {
        const random = Math.floor(Math.random() * khodam.length);
        showKhodam.innerHTML = khodam[random].khodam;
        reaction.setAttribute('src', khodam[random].img);
        
        btn_cekLagi.style.display = 'block';
        loading.style.display = 'none';
        reaction.style.display = 'block';
        btn_khodam.style.display = 'none';


    }, 1500);
}

console.log(khodam[3]);