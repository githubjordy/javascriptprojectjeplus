const{testfunctie} = require('/testfunctie');

test('should output name and age',()=>{
    
    
    const text = testfunctie(4);

    expect(text).toBe("testfunctie succes");
});