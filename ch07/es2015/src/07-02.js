let msg = 'Global';

function outer(a) {

    let msg = 'OUTER';
    console.log(msg);

    if (true) {
        let msg = 'BlOCK';
        console.log(msg);
    }
}