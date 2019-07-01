"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descriptionGame = exports.getPuzzle = void 0;

var _utilites = _interopRequireDefault(require("../utilites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const positiveResponse = 'yes';
const negativeResponse = 'no';
const descriptionGame = `Answer "${positiveResponse}" if number even otherwise answer "${negativeResponse}".`;
exports.descriptionGame = descriptionGame;

const isEven = number => number % 2 === 0;

const getPuzzle = () => {
  const currentQuestion = (0, _utilites.default)();
  const currentAnswer = isEven(currentQuestion) ? positiveResponse : negativeResponse;
  return [currentQuestion, currentAnswer];
};

exports.getPuzzle = getPuzzle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9ldmVuLmpzIl0sIm5hbWVzIjpbInBvc2l0aXZlUmVzcG9uc2UiLCJuZWdhdGl2ZVJlc3BvbnNlIiwiZGVzY3JpcHRpb25HYW1lIiwiaXNFdmVuIiwibnVtYmVyIiwiZ2V0UHV6emxlIiwiY3VycmVudFF1ZXN0aW9uIiwiY3VycmVudEFuc3dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUcsS0FBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxJQUF6QjtBQUNBLE1BQU1DLGVBQWUsR0FBSSxXQUFVRixnQkFBaUIsc0NBQXFDQyxnQkFBaUIsSUFBMUc7OztBQUVBLE1BQU1FLE1BQU0sR0FBR0MsTUFBTSxJQUFJQSxNQUFNLEdBQUcsQ0FBVCxLQUFlLENBQXhDOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLGVBQWUsR0FBRyx3QkFBeEI7QUFDQSxRQUFNQyxhQUFhLEdBQUdKLE1BQU0sQ0FBQ0csZUFBRCxDQUFOLEdBQTBCTixnQkFBMUIsR0FBNkNDLGdCQUFuRTtBQUVBLFNBQU8sQ0FBQ0ssZUFBRCxFQUFrQkMsYUFBbEIsQ0FBUDtBQUNELENBTEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4uL3V0aWxpdGVzJztcblxuY29uc3QgcG9zaXRpdmVSZXNwb25zZSA9ICd5ZXMnO1xuY29uc3QgbmVnYXRpdmVSZXNwb25zZSA9ICdubyc7XG5jb25zdCBkZXNjcmlwdGlvbkdhbWUgPSBgQW5zd2VyIFwiJHtwb3NpdGl2ZVJlc3BvbnNlfVwiIGlmIG51bWJlciBldmVuIG90aGVyd2lzZSBhbnN3ZXIgXCIke25lZ2F0aXZlUmVzcG9uc2V9XCIuYDtcblxuY29uc3QgaXNFdmVuID0gbnVtYmVyID0+IG51bWJlciAlIDIgPT09IDA7XG5cbmNvbnN0IGdldFB1enpsZSA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFF1ZXN0aW9uID0gZ2V0UmFuZG9tSW50KCk7XG4gIGNvbnN0IGN1cnJlbnRBbnN3ZXIgPSBpc0V2ZW4oY3VycmVudFF1ZXN0aW9uKSA/IHBvc2l0aXZlUmVzcG9uc2UgOiBuZWdhdGl2ZVJlc3BvbnNlO1xuXG4gIHJldHVybiBbY3VycmVudFF1ZXN0aW9uLCBjdXJyZW50QW5zd2VyXTtcbn07XG5cbmV4cG9ydCB7IGdldFB1enpsZSwgZGVzY3JpcHRpb25HYW1lIH07XG4iXX0=