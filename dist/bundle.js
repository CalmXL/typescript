
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    class Container {
        constructor() {
            this.instance = new Map(); // 所有的实例
            this.properties = new Map(); // 存放属性对应的信息
        }
        bind(key, creator) {
            if (!this.instance.has(key)) {
                this.instance.set(key, creator());
            }
        }
        resolve(key) {
            // 将记录的属性自动的注入到当前的实例上
            let instance = this.instance.get(key);
            for (let prop of this.properties) {
                // Compute-monitor => Monitor
                let [key, ServiceKey] = prop;
                let [className, propName] = key.split('-');
                // 检索是否给当前的类注入
                if (instance.constructor.name !== className) {
                    continue;
                }
                // 自动装载
                instance[propName] = this.resolve(ServiceKey);
            }
            return instance;
        }
        bootstrap() {
            console.log('启动电脑', this);
        }
    }
    const c = new Container();
    // 提供到容器中, 自动会创建在实例容器中
    let Monitor27inch = class Monitor27inch {
    };
    Monitor27inch = __decorate([
        Provide('Monitor')
    ], Monitor27inch);
    let AppleHost = class AppleHost {
    };
    AppleHost = __decorate([
        Provide('Host')
    ], AppleHost);
    // DI 依赖注入, 不需要在类中硬编码
    let Computer = class Computer {
        bootstrap() {
            console.log('启动: ', this);
        }
    };
    __decorate([
        Inject('Monitor')
    ], Computer.prototype, "monitor", void 0);
    __decorate([
        Inject('Host')
    ], Computer.prototype, "host", void 0);
    Computer = __decorate([
        Provide('Computer')
    ], Computer);
    function Provide(key) {
        return (target) => {
            c.bind(key, () => new target());
        };
    }
    function Inject(injectKey) {
        return (target, key) => {
            // 当前在哪个原型上 注入了哪些属性,做一个映射关系,稍后解析的时候
            c.properties.set(`${target.constructor.name}-${key}`, injectKey);
            // 关联就是哪个类,对应的哪个属性,用哪个标识找到实例进行赋值
            // console.log(c.properties);
        };
    }
    const computer = c.resolve('Computer');
    computer.bootstrap();

})();
//# sourceMappingURL=bundle.js.map
