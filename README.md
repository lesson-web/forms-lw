# Forms-LW

Супер-пупер удобный плагин для реализации форм.

## Использование

1. Прикрепите к проекту 'jquery',  плагин 'forms-lw' и ваш скрипт:

```html
<script src='js/jquery.js'></script>
<script src='js/forms-lw.js'></script>
<script src='js/script.js'></script>
```
2. В html пропишите заготовку вашей формы:

```html
<form action="" class="js-form-lw">
  <div class="form-lw-thanks">
    Спасибо! Отзыв отправлен!
  </div>
  <div class="form-lw-content">
    <input type="hidden" class="form-lw-title-form" value="Форма для сбора отзывов">
    <div class="title-form-lw">
      Форма для сбора отзывов
    </div>

    <input type="text" class='form-lw-check-field' data-title='Имя' name='name' placeholder="Имя">
    <input type="text" class='form-lw-check-field' data-title='Фамилия' name='last_name' placeholder="Фамилия">
    <input type="email" class='form-lw-check-field' data-title='E-mail' name='email' placeholder="E-mail">
    <textarea class='form-lw-check-field' name="comment" data-title='Отзыв' name='otziv' placeholder="Отзыв"></textarea>
    <button>Отправить</button>
  </div>
</form>
```

Классы, начинающиеся на `form-lw-` обязательны для использования.

* `form-lw-title-form` - название вашей формы. Этот текст будет использоваться для заголовка письма.

* `form-lw-check-field` - поля, которые проходят проверку.

* `form-lw-thanks` - блок, который покажется при успешном отправлении формы. Тут можно написать "спасибку" или еще какую-то важную информацию для пользователя. Изначально у этого блока обязательно должно стоять css-свойство `display:none`.

* 'form-lw-content' - контент формы. Этот блок скроется при успешном отправлении формы.

3. В скрипте вашего проекта инициализируйте код обработки формы.

```javascript
$('.js-form-lw').formsLw({
  'color-error-default' : 'white',
  'color-error': 'tomato',
  'number-of-parents': 0,
  'post-file' : 'post.php',
  'emails' : 'email@mail.ru',
  'from' : 'from@mail.ru',
});
```

* `color-error-default` - стандартный цвет поля ввода. Этот цвет примет поле ввода, если оно введено верно.

* `color-error` - цвет поля ввода при ошибке. Этот цвет примет поле ввода, если оно введено НЕ верно.

* `number-of-parents` - кол-во родителей от input, до блока, который должен изменить цвет при ошибке. В случае, если значение 0, то при ошибке будет подсвечен сам input.

* `post-file` - путь к файлу, который отвечает за отправку письма на back-end.

* `emails` - кому отправить письмо.

* `from` - от кого отправить письмо.
