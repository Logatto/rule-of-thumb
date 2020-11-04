import { shallowMount, createLocalVue } from "@vue/test-utils";
import Card from "@/components/common/Card.vue";
import filter from "@/filters";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.filter(filter);
localVue.use(Vuex);

function createConfig(props = {}) {
  const propsData = props;
  const stubs = {
    fa: { template: "<div></div>" },
  };
  const mocks = {
    $store: {
      state: {
        votes: [],
      },
      dispatch: () => {},
    },
  };
  return Object.assign({ propsData, stubs, mocks });
}

const factory = (config) => {
  return shallowMount(Card, {
    propsData: config.propsData,
    stubs: config.stubs,
    mocks: config.mocks,
    localVue,
  });
};

describe("Card.vue", () => {
  it("renders props when passed", () => {
    const name = "Person Name";
    const description = "Loren ipsum";

    const config = createConfig({ name, description });
    const wrapper = factory(config);
    expect(wrapper.find(".card-title_name").text()).toMatch(name);
    expect(wrapper.find(".card-description").text()).toMatch(description);
  });

  it("renders timeago", () => {
    const d = new Date();
    d.setMonth(d.getMonth() - 3);
    const date = d.toString();

    const config = createConfig({ date });
    const wrapper = factory(config);

    expect(wrapper.find(".card-subinfo_time").text()).toMatch("3 months ago");
  });

  it("renders props totals", () => {
    const total_up = 20;
    const total_down = 40;

    const config = createConfig({ total_up, total_down });
    const wrapper = factory(config);
    expect(wrapper.find(".result_up").text()).toMatch("33%");
    expect(wrapper.find(".result_down").text()).toMatch("67%");
  });

  it("UP trending status", () => {
    const total_up = 40;
    const total_down = 10;

    const config = createConfig({ total_up, total_down });
    const wrapper = factory(config);
    expect(wrapper.find(".card-current-status button").classes()).toContain(
      "btn-green"
    );
  });

  it("DOWN trending status", () => {
    const total_up = 40;
    const total_down = 60;

    const config = createConfig({ total_up, total_down });
    const wrapper = factory(config);
    expect(wrapper.find(".card-current-status button").classes()).toContain(
      "btn-orange"
    );
  });

  it("Click send vote", async () => {
    const total_up = 20;
    const total_down = 40;

    const config = createConfig({ total_up, total_down });
    const wrapper = factory(config);

    const btnUp = wrapper.find(".button-options button.btn-green");
    const btnSendVote = wrapper.find(".button-action button.btn-primary");

    btnUp.trigger("click");
    await wrapper.vm.$nextTick();

    btnSendVote.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".button-action button").text()).toContain(
      "Vote Again"
    );
  });
});
