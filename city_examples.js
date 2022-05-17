let people=[
    {
        name: 'hakan',
        surname: 'özoğlu',
        age: '30',
        location: 'istanbul',
        gender: 'man',
        score: 10,
        workingDays: 90,
        books: 1,
      },
       {
        name: 'akif',
        surname: 'özoğlu',
        age: '32',
        location: 'istanbul',
        gender: 'man',
        score: 17,
        workingDays: 17,
        books: 9,
      },
       {
        name: 'beyza',
        surname: 'özoğlu',
        age: '16',
        location: 'trabzon',
        gender: 'woman',
        score: 28,
        workingDays: 64,
        books: 178,
      },
       {
          name: 'alp',
          surname: 'öztürk',
          age: '28',
          location: 'aydın',
          gender: 'man',
          score: 28,
          workingDays: 64,
          books: 178,
        },
        {
          name: 'serdar',
          surname: 'çakır',
          age: '22',
          location: 'istanbul',
          gender: 'man',
          score: 28,
          workingDays: 64,
          books: 178,
        },
      
        {
          name: 'rümeysa',
          surname: 'türkan',
          age: '22',
          location: 'istanbul',
          gender: 'man',
          score: 28,
          workingDays: 64,
          books: 178,
        },
        {
          name: 'mehmet ali',
          surname: 'tunay',
          age: '30',
          location: 'istanbul',
          gender: 'man',
          score: 28,
          workingDays: 64,
          books: 178,
        },
      {
          name: 'furkan',
          surname: 'atsan',
          age: '23',
          location: 'ankara',
          gender: 'man',
          score: 28,
          workingDays: 64,
          books: 178,
        },
        {
          name: 'kader',
          surname: 'arslan',
          age: '24',
          location: 'adana',
          gender: 'man',
          score: 28,
          workingDays: 64,
          books: 178,
        },
      {
          name: 'uğurcan',
          surname: 'uçar',
          age: '24',
          location: 'trabzon',
          gender: 'man',
          score: 28,
          workingDays: 64,
          books: 178,
        },
]

    
    let data =people.reduce((prev, item) => {
        // mevcut olan kullanıcının yaşadığı yeri alıyoruz
        let group = item.location;
        //yaşadığı yere ait obje yoksa oluşturuyoruz.
        if(!prev[group]) prev[group] = {group, children: [item]}
        // Zaten şehir var ise ögeyi şehire ait olan objenin alt elemanı olarak ekliyoruz.
        else prev[group].children.push(item);
        return prev;
      }, {})
      
      // buradaki veriler bir nesne olduğundan, değerler dizisi almak için
      // Object.values method kullanıyoruz.
      let result = Object.values(data)
      //console.log(result)
      console.log(JSON.stringify(data))
    