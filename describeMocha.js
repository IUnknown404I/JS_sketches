describe("pow", function() {
    // before(() => alert("Тестирование началось – перед тестами"));

    it("2 в степени 3 будет 8", function() {
        assert.equal(pow(2, 3), 8);
    });
    it("3 в степени 5 будет 81", function() {
        assert.equal(pow(3, 5), 243);
    });

    it("для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });

    describe("возводит x в степень 4", function() {
        function makeTest(x) {
            let expected = x**4;
            it(`${x} в степени 4 = ${expected}`, function (){
                assert.equal(pow(x,4), expected);
            });
        }
        for (let i = 0; i < 5; i++) {
            makeTest(i);
        }
    });
});