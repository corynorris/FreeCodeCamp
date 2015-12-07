<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" >
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css">
		<link rel="stylesheet" type="text/css" href="custom.css">
	</head>
	<body>
		<div class="container-fluid">
			<div class="calculator">
				<div class="row"><h1 class="text-center">Roman Calculator</h1></div>
				<div class="row">
					<div class="col-sm-12">
						<input type="text" id="result" class="form-control" disabled>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<button class="btn btn-primary raised medium">AC</button>
						<button class="btn btn-primary raised medium">CE</button>
					</div>
				</div>
				<!-- 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 -->
				<!-- 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' -->
				
				<div class="row">
					<div class="col-sm-12">
						<button class="btn btn-primary raised">C</button>
						<button class="btn btn-primary raised">D</button>
						<button class="btn btn-primary raised">M</button>
						<button class="btn btn-primary raised">+</button>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<button class="btn btn-primary raised">V</button>
						<button class="btn btn-primary raised">X</button>
						<button class="btn btn-primary raised">L</button>
						<button class="btn btn-primary raised">-</button>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<button class="btn btn-primary raised">I</button>
						<button class="btn btn-primary raised">II</button>
						<button class="btn btn-primary raised">III</button>
						<button class="btn btn-primary raised">*</button>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<button class="btn btn-primary raised large">=</button>
					</div>
				</div>
			</div>
		</div>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script type="text/javascript" src="roman-numerals.js"></script>
		<script type="text/javascript" src="calculator.js"></script>
	</body>
</html>