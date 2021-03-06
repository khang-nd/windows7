import $ from 'jquery';

const TEMPLATE = (title, index) => `
    <div class="window" id="window-folder-${index}">
        <div class="titlebar">
            <div class="title folder">${title}</div>
            <div class="controls">
                <div class="control minimize" data-target="#window-folder-${index}">–</div>
                <div class="control maximize" data-target="#window-folder-${index}">□</div>
                <div class="control closewin" data-target="#window-folder-${index}">×</div>
            </div>
        </div>
        <div class="addrbar">
            <div>
                <div class="button round back">&#x279C;</div>
                <div class="button round">&#x279C;</div>
            </div>
            <div class="addr folder"><label>${title}</label></div>
            <div class="input">
                <input type="search" placeholder="Search ${title}"/>
            </div>
        </div>
        <div class="toolbar"></div>
        <div class="container">
            <div class="text-center text-muted">This folder is empty.</div>
        </div>
    </div>`;

let index = 0;
export default function ($desktop) {
  this.create = (e) => {
    const $target = $(e.target);
    const title = e.target.value;
    const window = TEMPLATE(title, index);
    $target
      .parents('.folder')
      .attr('data-target', `#window-folder-${index}`);
    $target.parent().text(title);
    $target.remove();
    $(window)
      .appendTo($desktop)
      .draggable({
        containment: 'parent',
        handle: '.title',
      });
    index += 1;
  };
}
