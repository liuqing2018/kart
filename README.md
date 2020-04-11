# my-kart

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 1.全局引入的组件
### 2.常用工具方法
### 3.请求交互
### 4.代码风格指南【摘选】
> 具体风格请点击[风格指南](https://cn.vuejs.org/v2/style-guide/)
##### 4.1 Css使用BEM  [http://getbem.com/](http://getbem.com/)
> BEM是一种非常有用，功能强大且简单的命名约定，它使您的前端代码更易于阅读和理解，易于使用，易于扩展，更健壮和明确，并且更加严格


##### 4.2 组件命名单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

```
# bad
components/
|- mycomponent.vue

components/
|- myComponent.vue
```

```
# good
components/
|- MyComponent.vue

components/
|- my-component.vue
```

##### 4.3 组件名中的单词顺序
> 组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾

```
# bad

components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

```
# good

components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

##### 4.4 自闭合组件引入
```
# bad
<MyComponent></MyComponent>

# good

<my-component></my-component>

```


##### 4.5 组件引入名称
> 对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。
```
# js

import MyComponent from './components/MyComponent.vue';

# html
<my-component></my-component>
```

##### 4.6 组件Prop 名大小写
> 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。

bad
```
# js

props: {
  'greeting-text': String
}

# html

<WelcomeMessage greetingText="hi"/>

```

good
```
# js

.props: {
    greetingText: String
}

# html

<welcome-message greeting-text="hi"></welcome-message>
```

##### 4.7 组件或实例的选项的顺序
```
export default {
	name: 'MyComponentName',
	components: {},
	directives: {},
	filters: {},
	extends: {},
	props: {},
	data() {
	  return {};
	},
	computed: {},
	watch: {},
	beforeCreate() {},
	created() {},
	beforeMount() {
	},
	mounted() {},
	destroyed() {},
	methods: {}
}
```

##### 4.8 元素attribute 的顺序
- 属性 { class、id、data-set ... }
- 指令 { v-if、v-model }
- 数据 { :data="data" }
- 方法 { @click="handleClick" }

##### 4.9 在 v-if/v-else-if/v-else 中使用 key 【尤其是表单页面】
> 如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 <div> 元素)。

```
<div
  v-if="error"
  key="search-status"
>
  错误：{{ error }}
</div>
<div
  v-else
  key="search-results"
>
  {{ results }}
</div>
```
