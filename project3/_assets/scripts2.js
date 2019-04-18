$(document).ready(function () {

  $('p').on('click', function(){
          var myval0 = $(this).css('font-family');
          var myval = $(this).css('font-size');
          var myval2 = $(this).css('font-weight');
          var myval3 = $(this).css('line-height');
          var myval3b = $(this).css('text-align');
          var myval3a = $(this).css('color');
          var myval4 = $(this).height();
          var myval4a = $(this).width();
          var myval4b = $(this).css('top');
          var myval4c = $(this).css('bottom');
          var myval4d = $(this).css('left');
          var myval4e = $(this).css('right');
          var myval5 = $(this).css('position');
          var myval5a = $(this).css('overflow');
          var myval6 = $(this).css('display');
          var myval7 = $(this).css('margin');
          var myval7a = $(this).css('padding');
          var myval7b = $(this).css('z-index');
          var myval8 = $(this).css('border');
          var myval9 = $(this).css('background-color');
          var myval10 = $(this).css('animation');
          $('body').append('<div style="background-color: white; position: fixed; height: 300px; overflow: auto; width: 500px; right: 25px; top: 64px; z-index: 5000; border: solid black 2px; font-weight: 400; padding-bottom: 16px;"><div style="position: fixed; background-color: white; border: solid black 2px; font-family: helvetica; font-size: 20px; padding: 6px; top:27.2px; right: 25px; width: 488px;">Outspector</div><div style="display: flex;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 600; border-right: solid black 2px; width: 100px;">Paragraphs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Divs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Headers</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Images</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Nav</div></div><br><div style:"padding: 7px;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;">Font Styles</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">Font Family: ' + (myval0) + '<br>Font Size: ' + (myval) + '<br>Font Weight: '  + (myval2) + '<br>Line Height: '  + (myval3) +  '<br>Text Align: '  + (myval3b) + '<br>Color: '  + (myval3a) + '</div>' + '<div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;"><br>Positioning</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">' + 'Height: '  + (myval4) + '<br>Width: '  + (myval4a) + '<br>Top: '  + (myval4b) + '<br>Bottom: '  + (myval4c) + '<br>Left: '  + (myval4d) + '<br>Right: '  + (myval4e) + '<br>Position: '  + (myval5) + '<br>Overflow: '  + (myval5a) + '<br>Display: '  + (myval6) + '<br>Margin: '  + (myval7) + '<br>Padding: '  + (myval7a) + '<br>Z-index: '  + (myval7b) + '</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;"><br>Stylings</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">Border: ' + (myval8) + '<br>Background Color: ' + (myval9) +  '<br>Animations: ' + (myval10) + '</div></div></div>');
  });

  $('div').on('click', function(){
          var myval0 = $(this).css('font-family');
          var myval = $(this).css('font-size');
          var myval2 = $(this).css('font-weight');
          var myval3 = $(this).css('line-height');
          var myval3b = $(this).css('text-align');
          var myval3a = $(this).css('color');
          var myval4 = $(this).height();
          var myval4a = $(this).width();
          var myval4b = $(this).css('top');
          var myval4c = $(this).css('bottom');
          var myval4d = $(this).css('left');
          var myval4e = $(this).css('right');
          var myval5 = $(this).css('position');
          var myval5a = $(this).css('overflow');
          var myval6 = $(this).css('display');
          var myval7 = $(this).css('margin');
          var myval7a = $(this).css('padding');
          var myval7b = $(this).css('z-index');
          var myval8 = $(this).css('border');
          var myval9 = $(this).css('background-color');
          var myval10 = $(this).css('animation');
          $('body').append('<div style="background-color: white; position: fixed; height: 300px; overflow: auto; width: 500px; right: 25px; top: 64px; z-index: 5000; border: solid black 2px; font-weight: 400; padding-bottom: 16px;"><div style="display: flex;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; width: 100px;">Paragraphs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 600; border-right: solid black 2px; top: 0; float: right; width: 100px;">Divs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Headers</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Images</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Nav</div></div><br><div style:"padding: 7px;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;">Font Styles</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">Font Family: ' + (myval0) + '<br>Font Size: ' + (myval) + '<br>Font Weight: '  + (myval2) + '<br>Line Height: '  + (myval3) +  '<br>Text Align: '  + (myval3b) + '<br>Color: '  + (myval3a) + '</div>' + '<div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;"><br>Positioning</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">' + 'Height: '  + (myval4) + '<br>Width: '  + (myval4a) + '<br>Top: '  + (myval4b) + '<br>Bottom: '  + (myval4c) + '<br>Left: '  + (myval4d) + '<br>Right: '  + (myval4e) + '<br>Position: '  + (myval5) + '<br>Overflow: '  + (myval5a) + '<br>Display: '  + (myval6) + '<br>Margin: '  + (myval7) + '<br>Padding: '  + (myval7a) + '<br>Z-index: '  + (myval7b) + '</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;"><br>Stylings</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">Border: ' + (myval8) + '<br>Background Color: ' + (myval9) +  '<br>Animations: ' + (myval10) + '</div></div></div>');
  });

  $('h1, h2, h3, h4, h5, h6, h7').on('click', function(){
          var myval0 = $(this).css('font-family');
          var myval = $(this).css('font-size');
          var myval2 = $(this).css('font-weight');
          var myval3 = $(this).css('line-height');
          var myval3b = $(this).css('text-align');
          var myval3a = $(this).css('color');
          var myval4 = $(this).height();
          var myval4a = $(this).width();
          var myval4b = $(this).css('top');
          var myval4c = $(this).css('bottom');
          var myval4d = $(this).css('left');
          var myval4e = $(this).css('right');
          var myval5 = $(this).css('position');
          var myval5a = $(this).css('overflow');
          var myval6 = $(this).css('display');
          var myval7 = $(this).css('margin');
          var myval7a = $(this).css('padding');
          var myval7b = $(this).css('z-index');
          var myval8 = $(this).css('border');
          var myval9 = $(this).css('background-color');
          var myval10 = $(this).css('animation');
          $('body').append('<div style="background-color: white; position: fixed; height: 300px; overflow: auto; width: 500px; right: 25px; top: 64px; z-index: 5000; border: solid black 2px; font-weight: 400; padding-bottom: 16px;"><div style="position: fixed; background-color: white; border: solid black 2px; font-family: helvetica; font-size: 20px; padding: 6px; top:27.2px; right: 25px; width: 488px;">Outspector</div><div style="display: flex;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; width: 100px;">Paragraphs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-bottom: solid black 2px; border-right: solid black 2px; top: 0; float: right; width: 100px;">Divs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 600; border-right: solid black 2px;  top: 0; float: right; width: 100px;">Headers</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Images</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Nav</div></div><br><div style:"padding: 7px;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;">Font Styles</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">Font Family: ' + (myval0) + '<br>Font Size: ' + (myval) + '<br>Font Weight: '  + (myval2) + '<br>Line Height: '  + (myval3) +  '<br>Text Align: '  + (myval3b) + '<br>Color: '  + (myval3a) + '</div>' + '<div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;"><br>Positioning</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">' + 'Height: '  + (myval4) + '<br>Width: '  + (myval4a) + '<br>Top: '  + (myval4b) + '<br>Bottom: '  + (myval4c) + '<br>Left: '  + (myval4d) + '<br>Right: '  + (myval4e) + '<br>Position: '  + (myval5) + '<br>Overflow: '  + (myval5a) + '<br>Display: '  + (myval6) + '<br>Margin: '  + (myval7) + '<br>Padding: '  + (myval7a) + '<br>Z-index: '  + (myval7b) + '</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;"><br>Stylings</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">Border: ' + (myval8) + '<br>Background Color: ' + (myval9) +  '<br>Animations: ' + (myval10) + '</div></div></div>');
  });

  $('img').on('click', function(){
          var myval4 = $(this).height();
          var myval4a = $(this).width();
          var myval4b = $(this).css('top');
          var myval4c = $(this).css('bottom');
          var myval4d = $(this).css('left');
          var myval4e = $(this).css('right');
          var myval5 = $(this).css('position');
          var myval5a = $(this).css('overflow');
          var myval6 = $(this).css('display');
          var myval7 = $(this).css('margin');
          var myval7a = $(this).css('padding');
          var myval7b = $(this).css('z-index');
          var myval8 = $(this).css('border');
          var myval9 = $(this).css('background-color');
          var myval10 = $(this).css('animation');
          $('body').append('<div style="background-color: white; position: fixed; height: 300px; overflow: auto; width: 500px; right: 25px; top: 64px; z-index: 5000; border: solid black 2px; font-weight: 400; padding-bottom: 16px;"><div style="position: fixed; background-color: white; border: solid black 2px; font-family: helvetica; font-size: 20px; padding: 6px; top:27.2px; right: 25px; width: 488px;">Outspector</div><div style="display: flex;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; width: 100px;">Paragraphs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-bottom: solid black 2px; border-right: solid black 2px; top: 0; float: right; width: 100px;">Divs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif;border-bottom: solid black 2px; padding: 7px; font-weight: 400; border-right: solid black 2px;  top: 0; float: right; width: 100px;">Headers</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 600; border-right: solid black 2px;  top: 0; float: right; width: 100px;">Images</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Nav</div></div><br><div style:"padding: 7px;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;">Positioning</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">' + 'Height: '  + (myval4) + '<br>Width: '  + (myval4a) + '<br>Top: '  + (myval4b) + '<br>Bottom: '  + (myval4c) + '<br>Left: '  + (myval4d) + '<br>Right: '  + (myval4e) + '<br>Position: '  + (myval5) + '<br>Overflow: '  + (myval5a) + '<br>Display: '  + (myval6) + '<br>Margin: '  + (myval7) + '<br>Padding: '  + (myval7a) + '<br>Z-index: '  + (myval7b) + '</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;"><br>Stylings</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">Border: ' + (myval8) + '<br>Background Color: ' + (myval9) +  '<br>Animations: ' + (myval10) + '</div></div></div>');
  });

  $('nav').on('click', function(){
          var myval0 = $(this).css('font-family');
          var myval = $(this).css('font-size');
          var myval2 = $(this).css('font-weight');
          var myval3 = $(this).css('line-height');
          var myval3b = $(this).css('text-align');
          var myval3a = $(this).css('color');
          var myval4 = $(this).height();
          var myval4a = $(this).width();
          var myval4b = $(this).css('top');
          var myval4c = $(this).css('bottom');
          var myval4d = $(this).css('left');
          var myval4e = $(this).css('right');
          var myval5 = $(this).css('position');
          var myval5a = $(this).css('overflow');
          var myval6 = $(this).css('display');
          var myval7 = $(this).css('margin');
          var myval7a = $(this).css('padding');
          var myval7b = $(this).css('z-index');
          var myval8 = $(this).css('border');
          var myval9 = $(this).css('background-color');
          var myval10 = $(this).css('animation');
          $('body').append('<div style="background-color: white; position: fixed; height: 300px; overflow: auto; width: 500px; right: 25px; top: 64px; z-index: 5000; border: solid black 2px; font-weight: 400; padding-bottom: 16px;"><div style="position: fixed; background-color: white; border: solid black 2px; font-family: helvetica; font-size: 20px; padding: 6px; top:27.2px; right: 25px; width: 488px;">Outspector</div><div style="display: flex;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; width: 100px;">Paragraphs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-bottom: solid black 2px; border-right: solid black 2px; top: 0; float: right; width: 100px;">Divs</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-bottom: solid black 2px; border-right: solid black 2px;  top: 0; float: right; width: 100px;">Headers</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 400; border-right: solid black 2px; border-bottom: solid black 2px; top: 0; float: right; width: 100px;">Images</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; padding: 7px; font-weight: 600; top: 0; float: right; width: 100px;">Nav</div></div><br><div style:"padding: 7px;"><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;">Font Styles</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">Font Family: ' + (myval0) + '<br>Font Size: ' + (myval) + '<br>Font Weight: '  + (myval2) + '<br>Line Height: '  + (myval3) +  '<br>Text Align: '  + (myval3b) + '<br>Color: '  + (myval3a) + '</div>' + '<div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;"><br>Positioning</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">' + 'Height: '  + (myval4) + '<br>Width: '  + (myval4a) + '<br>Top: '  + (myval4b) + '<br>Bottom: '  + (myval4c) + '<br>Left: '  + (myval4d) + '<br>Right: '  + (myval4e) + '<br>Position: '  + (myval5) + '<br>Overflow: '  + (myval5a) + '<br>Display: '  + (myval6) + '<br>Margin: '  + (myval7) + '<br>Padding: '  + (myval7a) + '<br>Z-index: '  + (myval7b) + '</div><div style="color:black; font-size:16px; font-family:helvetica, sans-serif; font-weight: 600; margin-left: 7px;"><br>Stylings</div><div style="color:black; font-size:14.5px; font-family:helvetica, sans-serif; font-weight: 400; margin-left: 16px; line-height: 16px;">Border: ' + (myval8) + '<br>Background Color: ' + (myval9) +  '<br>Animations: ' + (myval10) + '</div></div></div>');
  });

});
