import { CustomPipePipe } from './custom-pipe.pipe';

xdescribe('CustomPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipePipe();
    expect(pipe).toBeTruthy();
  });
});
