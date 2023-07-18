import { newSpecPage } from '@stencil/core/testing';
import { CatCheckbox } from './cat-checkbox';

describe('cat-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CatCheckbox],
      html: `<cat-checkbox label="Label"></cat-checkbox>`
    });
    expect(page.root).toEqualHtml(`
     <cat-checkbox label="Label" tabindex="0">
        <mock:shadow-root>
          <label htmlfor="cat-checkbox-0">
            <input id="cat-checkbox-0" type="checkbox">
            <span aria-hidden="true" class="box" part="checkbox">
              <svg class="check" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
              <svg class="dash" viewBox="0 0 12 10">
                <polyline points="1.5 5 10.5 5"></polyline>
              </svg>
            </span>
            <span class="label" part="label">Label</span>
          </label>
        </mock:shadow-root>
      </cat-checkbox>
    `);
  });
});
