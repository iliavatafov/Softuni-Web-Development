function numberSearch(nums1, nums2) {

    let result = [];

    for (let i = 0; i < nums2[0]; i++) {
        result.push(nums1[i]);
    }

    result.splice(0, nums2[1]);

    let counter = 0;

    for (let j = 0; j < result.length; j++) {
        if (result[j] === nums2[2]) {
            counter++;
        }
    }
    console.log(`Number ${nums2[2]} occurs ${counter} times.`)
}

