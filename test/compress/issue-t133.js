
unexpected_side_effects_dropping_console: {
    options = {
        drop_console: true,
        evaluate: true,
        reduce_vars: true,
        side_effects: true,
        unused: true
    };
    input: {
        function f() {
            var a = 33;
            console.log(a++);
            alert(a);
        }
    }
    expect: {
        function f() {
            alert(33);
        }
    }
}
